import { ObjectTyped } from 'object-typed';
import { ObjectPath, ObjectPathValue } from '~/types/objectPath';

const ObjectEx = {
  mapValue: <O extends object, U>(
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

  get: <O, K extends ObjectPath<O>>(obj: O, path: K): ObjectPathValue<O, K> => {
    return (
      (path as string)
        .split('.')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .reduce((v, idx) => v[idx], obj as any) as ObjectPathValue<O, K>
    );
  },

  k: <O, K extends ObjectPath<O>>(obj: O, path: K) => path,
};

export default ObjectEx;
