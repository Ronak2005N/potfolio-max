import { useEffect, useRef } from 'react';
import { createClassName } from '../utils/helpers';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const HERO_PORTRAIT = {
  src: '/Images/1785820298011.png',
  alt: 'Halftone portrait of Ronak N',
  width: 1086,
  height: 1448,
};

const TOTAL_MS = 1450;
const REVEAL_START = 0.55;
const REVEAL_END = 1;
const DISSOLVE_START = 0.55;
const DISSOLVE_END = 0.9;
const MAX_PARTICLES = 2800;
const INK_COLOR = '#111111';

const AMBIENT_MAX = 20;
const AMBIENT_COLORS = ['#111111', '#222222', '#444444', '#666666'];
const AMBIENT_SPAWN_MIN = 300;
const AMBIENT_SPAWN_MAX = 700;
const AMBIENT_LIFETIME_MIN = 2000;
const AMBIENT_LIFETIME_MAX = 4000;
const AMBIENT_OFFSET_MIN = 40;
const AMBIENT_OFFSET_MAX = 60;
const AMBIENT_TRAVEL_MIN = 8;
const AMBIENT_TRAVEL_MAX = 25;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const lerp = (start, end, amount) => start + (end - start) * amount;

const rand = (min, max) => min + Math.random() * (max - min);

const easeOutBack = (t) => {
  const scale = 0.35;
  const c1 = scale * 1.70158;
  const c3 = c1 + 1;
  const u = t - 1;
  return 1 + c3 * u * u * u + c1 * u * u;
};

const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

const smoothstep = (t) => t * t * (3 - 2 * t);

const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

const zoneDelay = (yFrac) => {
  if (yFrac < 0.18) {
    return [250, 500];
  }
  if (yFrac < 0.55) {
    return [0, 250];
  }
  if (yFrac < 0.78) {
    return [50, 350];
  }
  return [300, 550];
};

const loadPortraitImage = () =>
  new Promise((resolve) => {
    const image = new Image();
    image.src = HERO_PORTRAIT.src;
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
  });

const measureCanvas = (wrap, canvas) => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = wrap.clientWidth;
  const height = wrap.clientHeight;
  canvas.width = Math.max(1, Math.round(width * dpr));
  canvas.height = Math.max(1, Math.round(height * dpr));
  return { width, height, dpr };
};

const buildParticles = (sourceImage, size) => {
  const { width: w, height: h } = size;
  const imageWidth = sourceImage.naturalWidth;
  const imageHeight = sourceImage.naturalHeight;
  const scale = Math.min(w / imageWidth, h / imageHeight);
  const drawnWidth = imageWidth * scale;
  const drawnHeight = imageHeight * scale;
  const offsetX = (w - drawnWidth) / 2;
  const offsetY = (h - drawnHeight) / 2;

  const offscreen = document.createElement('canvas');
  offscreen.width = Math.max(1, Math.round(drawnWidth));
  offscreen.height = Math.max(1, Math.round(drawnHeight));
  const offscreenContext = offscreen.getContext('2d', { willReadFrequently: true });
  offscreenContext.drawImage(sourceImage, 0, 0, offscreen.width, offscreen.height);
  const { data } = offscreenContext.getImageData(0, 0, offscreen.width, offscreen.height);

  const stride = clamp(Math.round(w / 90), 4, 8);
  const candidates = [];

  for (let y = 0; y < offscreen.height; y += stride) {
    for (let x = 0; x < offscreen.width; x += stride) {
      const index = (y * offscreen.width + x) * 4;
      const luminance = (data[index] + data[index + 1] + data[index + 2]) / 3;
      const alpha = data[index + 3] / 255;
      if (alpha > 0.15 && luminance < 150) {
        candidates.push({ x: offsetX + x, y: offsetY + y });
      }
    }
  }

  for (let i = candidates.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }

  const count = Math.min(candidates.length, MAX_PARTICLES);
  const centerX = w / 2;
  const centerY = h / 2;
  const particles = [];

  for (let i = 0; i < count; i += 1) {
    const destination = candidates[i];
    const angle = Math.random() * Math.PI * 2;
    const distance = rand(140, 240);
    const startX = clamp(centerX + Math.cos(angle) * distance, -30, w + 30);
    const startY = clamp(centerY + Math.sin(angle) * distance * 0.9, -30, h + 30);
    const [delayMin, delayMax] = zoneDelay(destination.y / h);
    const delay = Math.max(0, rand(delayMin, delayMax) + rand(-30, 30));
    const duration = rand(200, 380);
    const absorbed = Math.random() < 0.25;
    const radius = rand(1, 3);

    particles.push({
      sx: startX,
      sy: startY,
      dx: destination.x,
      dy: destination.y,
      delay,
      duration,
      radius,
      alpha: absorbed ? 0.05 : rand(0.4, 1),
      scout: delay < 250,
    });
  }

  return particles;
};

const drawParticle = (context, particle, elapsed) => {
  const progress = (elapsed - particle.delay) / particle.duration;
  let x = particle.sx;
  let y = particle.sy;
  let alpha = 0;

  if (progress < 0) {
    if (particle.scout && elapsed < 300) {
      alpha = particle.alpha * 0.9 * Math.min(1, elapsed / 250);
    }
  } else if (progress < 1) {
    const eased = easeOutBack(progress);
    x = lerp(particle.sx, particle.dx, eased);
    y = lerp(particle.sy, particle.dy, eased);
    alpha = particle.alpha * Math.min(1, progress * 3.5);
  } else {
    x = particle.dx;
    y = particle.dy;
    alpha = particle.alpha;
  }

  if (alpha <= 0.01) {
    return;
  }

  context.globalAlpha = alpha;
  context.beginPath();
  context.arc(x, y, particle.radius, 0, Math.PI * 2);
  context.fill();
};

const computeSilhouetteBounds = (particles) => {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const particle of particles) {
    if (particle.dx < minX) {
      minX = particle.dx;
    }
    if (particle.dx > maxX) {
      maxX = particle.dx;
    }
    if (particle.dy < minY) {
      minY = particle.dy;
    }
    if (particle.dy > maxY) {
      maxY = particle.dy;
    }
  }

  return { minX, minY, maxX, maxY };
};

const spawnAmbientParticle = (bounds, size, now) => {
  const edge = Math.floor(Math.random() * 4);
  const along = Math.random();
  let anchorX;
  let anchorY;
  let normalX;
  let normalY;

  if (edge === 0) {
    anchorX = bounds.minX + (bounds.maxX - bounds.minX) * along;
    anchorY = bounds.minY;
    normalX = 0;
    normalY = -1;
  } else if (edge === 1) {
    anchorX = bounds.maxX;
    anchorY = bounds.minY + (bounds.maxY - bounds.minY) * along;
    normalX = 1;
    normalY = 0;
  } else if (edge === 2) {
    anchorX = bounds.minX + (bounds.maxX - bounds.minX) * along;
    anchorY = bounds.maxY;
    normalX = 0;
    normalY = 1;
  } else {
    anchorX = bounds.minX;
    anchorY = bounds.minY + (bounds.maxY - bounds.minY) * along;
    normalX = -1;
    normalY = 0;
  }

  const offset = rand(AMBIENT_OFFSET_MIN, AMBIENT_OFFSET_MAX);
  const x0 = clamp(anchorX + normalX * offset, 2, size.width - 2);
  const y0 = clamp(anchorY + normalY * offset, 2, size.height - 2);

  const travel = rand(AMBIENT_TRAVEL_MIN, AMBIENT_TRAVEL_MAX);
  const merge = Math.random() < 0.5;
  let dx;
  let dy;

  if (merge) {
    dx = -normalX * travel;
    dy = -normalY * travel;
  } else {
    const tangentDir = Math.random() < 0.5 ? -1 : 1;
    dx = -normalY * tangentDir * travel * rand(0.4, 1) + normalX * rand(-4, 4);
    dy = normalX * tangentDir * travel * rand(0.4, 1) + normalY * rand(-4, 4);
  }

  const x1 = clamp(x0 + dx, 2, size.width - 2);
  const y1 = clamp(y0 + dy, 2, size.height - 2);

  const chordX = x1 - x0;
  const chordY = y1 - y0;
  const chordLength = Math.hypot(chordX, chordY) || 1;
  const bow = rand(3, 8);
  const cx = (x0 + x1) / 2 - (chordY / chordLength) * bow;
  const cy = (y0 + y1) / 2 + (chordX / chordLength) * bow;

  const roll = Math.random();
  const radius = roll < 0.85 ? Math.floor(rand(1, 4)) : 4;

  return {
    x0,
    y0,
    x1,
    y1,
    cx,
    cy,
    born: now,
    lifetime: rand(AMBIENT_LIFETIME_MIN, AMBIENT_LIFETIME_MAX),
    radius,
    color: AMBIENT_COLORS[Math.floor(Math.random() * AMBIENT_COLORS.length)],
    alpha: rand(0.15, 0.55),
    phase: rand(0, Math.PI * 2),
  };
};

const drawAmbientParticle = (context, particle, now) => {
  const age = now - particle.born;
  const progress = clamp(age / particle.lifetime, 0, 1);
  const eased = easeInOutSine(progress);
  const inv = 1 - eased;

  const x = inv * inv * particle.x0 + 2 * inv * eased * particle.cx + eased * eased * particle.x1;
  const y = inv * inv * particle.y0 + 2 * inv * eased * particle.cy + eased * eased * particle.y1;

  const wobbleX = Math.sin(now / 1800 + particle.phase) * 1.2;
  const wobbleY = Math.cos(now / 2200 + particle.phase) * 0.8;

  const fadeIn = Math.min(1, age / 300);
  const fadeOut = progress > 0.75 ? 1 - (progress - 0.75) / 0.25 : 1;
  const alpha = particle.alpha * fadeIn * fadeOut;

  if (alpha <= 0.01) {
    return;
  }

  context.globalAlpha = alpha;
  context.fillStyle = particle.color;
  context.beginPath();
  context.arc(x + wobbleX, y + wobbleY, particle.radius, 0, Math.PI * 2);
  context.fill();
};

const InkPortrait = () => {
  const reduceMotion = usePrefersReducedMotion();
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!wrap || !canvas || !img) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    let cancelled = false;
    let frameId = 0;
    let size = measureCanvas(wrap, canvas);
    let ambientList = null;

    const onResize = () => {
      size = measureCanvas(wrap, canvas);
      if (ambientList) {
        ambientList.length = 0;
      }
    };
    window.addEventListener('resize', onResize);

    loadPortraitImage().then((sourceImage) => {
      if (cancelled || !sourceImage) {
        return;
      }

      const particles = buildParticles(sourceImage, size);
      const bounds = computeSilhouetteBounds(particles);
      const start = performance.now();

      const startAmbient = (now) => {
        const ambient = [];
        ambientList = ambient;
        let nextSpawn = now + rand(AMBIENT_SPAWN_MIN, AMBIENT_SPAWN_MAX);

        const tick = (tickNow) => {
          if (cancelled) {
            return;
          }

          if (tickNow >= nextSpawn && ambient.length < AMBIENT_MAX) {
            ambient.push(spawnAmbientParticle(bounds, size, tickNow));
            nextSpawn = tickNow + rand(AMBIENT_SPAWN_MIN, AMBIENT_SPAWN_MAX);
          }

          context.setTransform(size.dpr, 0, 0, size.dpr, 0, 0);
          context.clearRect(0, 0, size.width, size.height);

          for (let i = ambient.length - 1; i >= 0; i -= 1) {
            const particle = ambient[i];
            if (tickNow - particle.born >= particle.lifetime) {
              ambient.splice(i, 1);
              continue;
            }
            drawAmbientParticle(context, particle, tickNow);
          }

          frameId = window.requestAnimationFrame(tick);
        };

        frameId = window.requestAnimationFrame(tick);
      };

      const tick = (now) => {
        if (cancelled) {
          return;
        }

        const elapsed = now - start;
        const progress = clamp(elapsed / TOTAL_MS, 0, 1);

        const reveal = clamp((progress - REVEAL_START) / (REVEAL_END - REVEAL_START), 0, 1);
        const dissolve = clamp((progress - DISSOLVE_START) / (DISSOLVE_END - DISSOLVE_START), 0, 1);

        img.style.opacity = String(easeOutQuad(reveal));
        canvas.style.opacity = String(1 - smoothstep(dissolve));

        context.setTransform(size.dpr, 0, 0, size.dpr, 0, 0);
        context.clearRect(0, 0, size.width, size.height);
        context.fillStyle = INK_COLOR;

        for (const particle of particles) {
          drawParticle(context, particle, elapsed);
        }

        if (progress >= 1) {
          img.style.opacity = '1';
          canvas.style.opacity = '1';
          startAmbient(now);
          return;
        }

        frameId = window.requestAnimationFrame(tick);
      };

      frameId = window.requestAnimationFrame(tick);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
    };
  }, [reduceMotion]);

  const wrapperClass = createClassName(
    'hero-portrait',
    'ink-portrait',
    reduceMotion ? 'is-static' : ''
  );

  return (
    <div ref={wrapRef} className={wrapperClass}>
      <img
        ref={imgRef}
        src={HERO_PORTRAIT.src}
        alt={HERO_PORTRAIT.alt}
        width={HERO_PORTRAIT.width}
        height={HERO_PORTRAIT.height}
        className={createClassName('hero-portrait-img', 'ink-portrait-img')}
      />
      {reduceMotion ? null : (
        <canvas ref={canvasRef} className="ink-portrait-canvas" aria-hidden="true" />
      )}
    </div>
  );
};

export default InkPortrait;
