export const createClassName = (...parts) =>
  parts
    .flat()
    .filter(Boolean)
    .join(' ');

export const getShellMinHeight = () => '100svh';

export const getMainA11yLabel = () => 'Main portfolio content';

export const getShellPlaceholderText = () => 'Portfolio Under Construction';
