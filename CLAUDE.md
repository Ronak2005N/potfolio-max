# CLAUDE.md

This document is the constitution for this project.

It defines the development philosophy, workflow, implementation standards, quality expectations, and decision-making process for Claude Code.

The repository is the source of truth for implementation details.

This document is the source of truth for how work should be performed.

If a user request conflicts with this document or an approved design blueprint, ask for clarification before proceeding instead of making assumptions.

---

# Project Vision

Build an award-quality personal portfolio that feels handcrafted, editorial, premium, modern, and timeless.

The portfolio should communicate craftsmanship rather than complexity.

Visitors should remember the experience rather than individual animations.

The website should never resemble an AI-generated template.

Primary goals:

- Premium user experience
- Exceptional typography
- Intentional whitespace
- Smooth interactions
- Resume-first storytelling
- Production-quality frontend engineering
- Outstanding performance

---

# Target Audience

The portfolio is designed for:

- Recruiters
- Clients
- Developers
- Startup Founders

Every visitor should leave with the impression that the portfolio demonstrates both technical ability and thoughtful product design.

---

# Development Workflow

Every feature must follow this lifecycle.

Blueprint
↓
Creative Review
↓
Concept Lock
↓
Implementation
↓
Review
↓
Polish
↓
Verification
↓
Complete

Never skip stages.

Implementation should never redesign an approved concept.

---

# Task Execution Protocol

For every implementation:

1. Understand the request.
2. Read the existing code before making changes.
3. Identify all affected files.
4. Explain the implementation plan.
5. Implement only the approved scope.
6. Verify integration with the existing architecture.
7. Run build verification.
8. Run lint verification.
9. Self-review the implementation.
10. Suggest improvements only after the requested task is complete.

Never skip verification.

---

# Current Project Status

## Completed Milestones

- Project foundation
- Design system
- Global design tokens
- Motion utilities
- App shell
- Navbar
- Hero
- About
- Featured Projects
- Skills  Capabilities
- Experience  The Record (architecture, data-driven)
- Contact  Say Hello
- Footer  Colophon
- Build verification
- Lint verification

## Approved

- Landing Experience Blueprint v1.0
- Hero Concept B (Interactive Editorial)
- Skills Concept  Capabilities (Concept Locked)
- Experience Concept  The Record (Concept Locked)

Note: Contact and Footer were implemented before their concepts were formally reviewed. A retroactive concept lock is pending for both.

## Current Milestone

Contact and Footer are implemented, styled, and wired into App in render order.

Experience records have been supplied and render in Experience (The Record).

## Progress Tracker

Wired into App, in render order: Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer.

All sections are data-driven and render from their data files.

Remaining empty placeholder: Cursor.
Remaining gaps: project links point to `#` (case studies not published yet); Experience records carry fields not yet rendered (focus, responsibilities, achievements, learned, website, caseStudy).

---

# Design Philosophy

Typography before effects.

Motion serves content.

Whitespace is part of the design.

Performance is a design feature.

Editorial over dashboard.

Craft over spectacle.

Minimal but memorable.

Remove before adding.

Every animation must have a purpose.

---

# Motion Philosophy

Motion should:

- guide attention
- reward interaction
- never interrupt reading
- never reduce performance
- never exist purely for decoration

Motion should always feel calm, refined, and intentional.

---

# Implementation Rules

Act only as the project's implementation engineer.

Do not redesign approved concepts.

Implement only the requested scope.

Never anticipate future requirements.

Do not introduce architecture that is not currently required.

Keep code simple.

Keep components modular.

Keep styling consistent with the design system.

Reuse existing utilities before creating new ones.

Avoid duplicate logic.

---

# Decision Making

When multiple implementation approaches are possible:

- Prefer the simplest maintainable solution.
- Prefer readability over cleverness.
- Prefer consistency over novelty.
- Prefer performance over visual complexity.
- Ask for clarification rather than making assumptions.

---

# Modification Rules

Before modifying any existing file:

- Understand its current responsibility.
- Preserve existing functionality.
- Avoid breaking unrelated features.
- Keep changes minimal and focused.
- Refactor only when it directly improves the requested task.

---

# Architecture Principles

Respect the existing project structure.

Keep App.jsx minimal.

Integrate with existing design tokens.

Avoid unnecessary abstraction.

Only create new files when genuinely required.

Maintain consistency across the project.

---

# Quality Standards

Every implementation should be production-ready.

Prioritize:

- readability
- maintainability
- accessibility
- responsiveness
- performance

Every file should feel like it was written by a senior frontend engineer.

---

# Accessibility

Always use:

- semantic HTML
- keyboard navigation
- focus-visible states
- proper ARIA attributes
- sufficient contrast
- logical tab order

Accessibility is never optional.

---

# Performance

Maintain smooth performance.

Prefer:

- transform
- opacity

Avoid expensive animations.

Lazy load where appropriate.

Avoid layout shifts.

Avoid unnecessary re-renders.

Performance is part of the user experience.

---

# Responsive Design

Every implementation must support:

320px

768px

1024px

1440px

Design should adapt naturally without awkward spacing or oversized elements.

---

# Code Quality Checklist

Before completing any task ask:

- Is the code maintainable?
- Can anything be simplified?
- Is anything duplicated?
- Does it match the design system?
- Does it preserve accessibility?
- Does it preserve performance?

Improve before finishing.

---

# Verification Checklist

Every completed task must verify:

npm run build

npm run lint

Responsive behavior

Accessibility

No console errors

No unused imports

No dead code

No duplicated logic

---

# Definition of Done

A task is complete only when:

- The requested functionality is fully implemented.
- The implementation matches the approved blueprint.
- Build succeeds.
- Lint succeeds.
- No console errors exist.
- The UI is responsive.
- Accessibility is preserved.
- The code has been self-reviewed.

---

# Communication Style

When reporting completed work:

Always provide:

Completed:
- Files created
- Files modified
- Files deleted

Verification:
- Build
- Lint
- Manual checks

Status:
- Passed / Failed

Blockers:
- Any remaining issues

Never claim something is complete without verification.

---

# Things to Avoid

Never create:

- AI-looking layouts
- Generic portfolio templates
- Heavy glassmorphism
- Dashboard-style interfaces
- Oversized gradients
- Neon effects
- Decorative motion without purpose
- Premature abstractions
- Unnecessary dependencies
- Unverified implementations

---

# Locked Design Decisions

Landing Experience Blueprint v1.0 is approved.

Hero Concept B (Interactive Editorial) is approved.

Do not redesign these unless explicitly instructed.

---

# References

Always align implementation with:

- Landing Experience Blueprint
- Locked Hero Concept
- Existing Design Tokens
- Motion Philosophy
- Project Vision

If implementation conflicts with these references, stop and ask for clarification instead of making assumptions.