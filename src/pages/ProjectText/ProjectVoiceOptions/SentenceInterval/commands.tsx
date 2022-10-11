export const COMMANDS = {
  up: 'up',
  down: 'down',
  set: 'set',
} as const;

export type COMMANDS = typeof COMMANDS[keyof typeof COMMANDS];

export const getValueApplyCmd = (
  cmd: COMMANDS,
  value: number,
  { min, max, ...options }: { min: number; max: number; step: number }
) => {
  let step = cmd === 'set' ? 0 : options.step;
  if (cmd === 'down') step = -step;

  return Number(Math.min(max, Math.max(value + step, min)).toFixed(2));
};
