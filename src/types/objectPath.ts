// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TFunction = (...args: any) => any;
type PrimitiveWithFunc = Primitive | TFunction;

// https://github.com/react-hook-form/react-hook-form/blob/master/src/types/path/eager.ts
type Primitive = null | undefined | string | number | boolean | symbol | bigint;

type ObjectPathImpl<
  K extends string | number,
  V,
  FIND extends PrimitiveWithFunc
> = V extends FIND
  ? `${K}`
  : V extends object
  ? `${K}.${ObjectPath<V, FIND>}`
  : never;

/**
 * Type which eagerly collects all paths through a type
 * @typeParam T - type which should be introspected
 * @typeParam FIND - 키로 넣을 타입
 * @example
 * ```
 * Path<{foo: {bar: string}}, string> = 'foo.bar'
 * ```
 */
export type ObjectPath<
  T,
  FIND extends PrimitiveWithFunc = PrimitiveWithFunc
> = {
  [K in keyof T]-?: ObjectPathImpl<K & string, T[K], FIND>;
}[keyof T];

/**
 * Type to evaluate the type which the given path points to.
 * @typeParam T - deeply nested type which is indexed by the path
 * @typeParam P - path into the deeply nested type
 * @typeParam FIND - 키로 넣을 타입* @example
 * ```
 * PathValue<{foo: {bar: string}}, 'foo.bar'> = string
 * ```
 */
export type ObjectPathValue<
  T,
  P extends ObjectPath<T, FIND>,
  FIND extends PrimitiveWithFunc = PrimitiveWithFunc
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = T extends any
  ? P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? R extends ObjectPath<T[K], FIND>
        ? ObjectPathValue<T[K], R, FIND>
        : never
      : never
    : P extends keyof T
    ? T[P]
    : never
  : never;

export type ObjectPathStringNumber<O> = ObjectPath<O, string | number>;
export type ObjectPathFunction<O> = ObjectPath<O, TFunction>;
