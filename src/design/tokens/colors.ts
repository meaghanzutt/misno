export const colors = {
  background: '#FFFFFF',
  surface: '#FAFAFA',
  text: '#111111',
  muted: '#6B7280',
  border: '#E5E7EB',
  forest: '#2F5D50',
  success: '#15803D',
  warning: '#B45309',
  danger: '#B91C1C',
} as const;

export type ColorToken = keyof typeof colors;
