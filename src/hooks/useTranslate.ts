/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import {
  ObjectPathFunction,
  ObjectPathStringNumber,
  ObjectPathValueFunction,
  TFunction,
} from '~/types/objectPath';
import ObjectEx from '~/utils/ObjectEx';

type Parameters<T extends (...args: any) => any> = T extends (
  arg: infer P
) => any
  ? P
  : T extends (...arg: infer P) => any
  ? P
  : never;

type TValueFuncObj<O, K extends ObjectPathFunction<O>> = {
  k: K;
  v: ObjectPathValueFunction<O, K>;
} extends { k: infer FK; v: infer FV }
  ? FK extends ObjectPathFunction<O>
    ? FV extends ObjectPathValueFunction<O, FK>
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
type TRootObject = Record<string, TTransObject>;

type TGetTranslateParam<O_ extends TTransObject> =
  | ObjectPathStringNumber<O_>
  | TValueFuncObj<O_, ObjectPathFunction<O_>>;

// 나중에 i18n 으로 돌리는게 나을듯
export const useTranslate = <
  O extends TRootObject,
  LANG extends keyof O,
  O_ extends TTransObject = O[keyof O]
>(
  labels: O,
  defaultLang: LANG
) => {
  const [lang, setLang] = useState<LANG>(defaultLang);

  const t = (key: TGetTranslateParam<O_>): string => {
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
  const tu: TGetTranslateUnsafe = (keyUnsafe) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return t(keyUnsafe);
  };

  return { setLang, t, tu };
};

const tk = <O extends TRootObject, O_ extends TTransObject = O[keyof O]>(
  labels: O,
  key: TGetTranslateParam<O_>
) => key;

export const makeUseTranslate = <
  O extends TRootObject,
  LANG extends keyof O,
  O_ extends TTransObject = O[keyof O]
>(
  labels: O,
  defaultLang: LANG
) => {
  return {
    useTranslate: () => useTranslate(labels, defaultLang),
    tk: (key: TGetTranslateParam<O_>) => tk(labels, key),
  };
};
