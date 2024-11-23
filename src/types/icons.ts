export const IconsList = [
  'Alarm',
  'Burger',
  'ChevronDown',
  'ChevronLeft',
  'ChevronRight',
  'ChevronUp',
  'Clock',
  'Close',
  'Eye',
  'EyeOff',
  'Load',
  'Pin',
  'Search',
] as const;
export type IconsUnion = (typeof IconsList)[number];
