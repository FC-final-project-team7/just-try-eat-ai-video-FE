import { ObjectTyped } from 'object-typed';

const ObjectEx = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  map: <O extends {}, U>(
    o: O,
    mapFn: (value: [keyof O, O[keyof O]], index: number, obj: O) => U
  ) => {
    const n = {} as { [key in keyof O]: U };
    const keys = ObjectTyped.keys(o);

    for (let idx = 0, length = keys.length; idx < length; ++idx) {
      const key = keys[idx];
      n[key] = mapFn([key, o[key]], idx, o);
    }

    return n;
  },
};

export default ObjectEx;
