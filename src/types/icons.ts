export const IconsList = [
  'Alarm',
  'Clock',
  'Eye',
  'EyeOff',
  'Load',
  'Search',
] as const;
export type IconsUnion = (typeof IconsList)[number];
