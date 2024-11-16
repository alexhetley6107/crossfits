export const IconsList = [
  'Alarm',
  'Clock',
  'Eye',
  'EyeOff',
  'Search',
] as const;
export type IconsUnion = (typeof IconsList)[number];
