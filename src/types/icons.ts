export const IconsList = [
  'Clock',
  'Eye',
  'EyeOff',
] as const;
export type IconsUnion = (typeof IconsList)[number];
