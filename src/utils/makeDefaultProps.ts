export const makeDefaultProps =
  <T extends object>() =>
  <P extends Partial<T>>(defaultProps: P) =>
    defaultProps;
