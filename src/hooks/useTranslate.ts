/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { ObjectPath, ObjectPathValue, TFunction } from '~/types/objectPath';
import ObjectEx from '~/utils/ObjectEx';

type Parameters<T extends (...args: any) => any> = T extends (
  arg: infer P
) => any
  ? P
  : T extends (...arg: infer P) => any
  ? P
  : never;

type TValueFuncObj<O, K extends ObjectPath<O, TFunction>> = {
  k: K;
  v: ObjectPathValue<O, K, TFunction>;
} extends { k: infer FK; v: infer FV }
  ? FK extends ObjectPath<O, TFunction>
    ? FV extends ObjectPathValue<O, FK, TFunction>
      ? FV extends TFunction
        ? { k: FK; v: Parameters<FV> }
        : never
      : never
    : never
  : never;

export type TGetTranslateUnsafe = (
  keyUnsafe: string | { k: string; v: any } | object
) => string;

type TTransObject = Record<string, unknown>;
type TPackObject = Record<string, TTransObject>;

type TTFuncParam<O extends TTransObject> =
  | ObjectPath<O, string | number>
  | TValueFuncObj<O, ObjectPath<O, TFunction>>;

type TTFunc<O extends TTransObject> = (key: TTFuncParam<O>) => string;

// 나중에 i18n 으로 돌리는게 나을듯
export const useTranslate = <
  O extends TPackObject,
  LANG extends keyof O,
  O_ extends TTransObject = O[LANG]
>(
  labels: O,
  defaultLang: LANG
) => {
  const [lang, setLang] = useState<LANG>(defaultLang);

  const t: TTFunc<O_> = (key) => {
    if (typeof key === 'string') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return ObjectEx.get(labels[lang], key);
    }
    if (typeof key === 'object') {
      if (!('k' in key) || !('v' in key))
        return `${JSON.stringify(key, null, 2)}\n 잘 못 된 오브젝트!`;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/ban-types,prefer-spread
      return (ObjectEx.get(labels[lang], key.k) as Function).apply(
        null,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Array.isArray(key.v) ? key.v : [key.v]
      );
    }

    return `${JSON.stringify(key, null, 2)}\n 잘 못 된 오브젝트!`;
  };

  // keyUnsafe 말 그대로 ts 를 거치지 않으니 주의
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tu: TGetTranslateUnsafe = (keyUnsafe) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return t(keyUnsafe);
  };

  return { setLang, t, tu };
};

type TTkFunc = <
  O extends TPackObject,
  O_ extends O[keyof O] = O[keyof O],
  K extends TTFuncParam<O_> = TTFuncParam<O_>
>(
  labels: O,
  key: K
) => K;

const tk: TTkFunc = (labels, key) => key;

type TTkFuncOnlyKey<
  O extends TPackObject,
  O_ extends O[keyof O] = O[keyof O]
> = <K extends TTFuncParam<O_>>(key: K) => K;

export const makeUseTranslate: <
  O extends TPackObject,
  LANG extends keyof O,
  O_ extends O[LANG] = O[LANG]
>(
  labels: O,
  defaultLang: LANG
) => {
  tk: TTkFuncOnlyKey<O, O_>;
  useTranslate: () => ReturnType<typeof useTranslate<O, LANG>>;
} = (labels, defaultLang) => {
  return {
    useTranslate: () => useTranslate(labels, defaultLang),
    tk: (key) => tk(labels, key),
  };
};
