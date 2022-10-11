//https://gist.github.com/djskinner/515d96af8d8b59bd6304bcddd7a26bc6

/* eslint-disable @typescript-eslint/no-empty-interface,@typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */

/**
 * This file contains custom types for styled-components that are designed
 * to improve TSServer performance by replacing JSX.IntrinsicElements with
 * JSXIntrinsicElementsMinimal, which is a subset of JSX.IntrinsicElements
 * that only includes the most commonly used HTML elements.
 */

import type * as hoistNonReactStatics from 'hoist-non-react-statics';
import type * as React from 'react';
import type {
  CSSObject,
  DefaultTheme,
  Interpolation,
  InterpolationFunction,
  StyledConfig,
  ThemedStyledProps,
} from 'styled-components';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import _styled, { css as _css } from 'styled-components';

export { createGlobalStyle, keyframes } from 'styled-components';
export type {
  CSSProperties,
  FlattenSimpleInterpolation,
} from 'styled-components';

// ANCHOR styled-components 에서 사용하는 태그 추가
// tsserver 가 터질려고 하길래...
export type JSXIntrinsicElementsMinimal = Pick<
  JSX.IntrinsicElements,
  | 'a'
  | 'div'
  | 'span'
  | 'img'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'input'
  | 'button'
  | 'label'
  | 'svg'
  | 'hr'
  | 'ul'
  | 'ol'
  | 'li'
  | 'option'
  | 'select'
  | 'datalist'
  | 'textarea'
>;

// Modified from
// Type definitions for styled-components 5.1
// Project: https://github.com/styled-components/styled-components, https://styled-components.com
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
//                 Ihor Chulinda <https://github.com/Igmat>
//                 Jessica Franco <https://github.com/Jessidhia>
//                 Jason Killian <https://github.com/jkillian>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Matthew Wagerfield <https://github.com/wagerfield>
//                 Yuki Ito <https://github.com/Lazyuki>
//                 Aaron Reisman <https://github.com/lifeiscontent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// forward declarations
declare global {
  namespace NodeJS {
    // tslint:disable-next-line:no-empty-interface
    interface ReadableStream {}
  }
  // tslint:disable-next-line:no-empty-interface
  interface ShadowRoot {}
}

export type IntrinsicElementsKeys = keyof JSXIntrinsicElementsMinimal;

// Any prop that has a default prop becomes optional, but its type is unchanged
// Undeclared default props are augmented into the resulting allowable attributes
// If declared props have indexed properties, ignore default props entirely as keyof gets widened
// Wrap in an outer-level conditional type to allow distribution over props that are unions
type Defaultize<P, D> = P extends any
  ? string extends keyof P
    ? P
    : PickU<P, Exclude<keyof P, keyof D>> &
        Partial<PickU<P, Extract<keyof P, keyof D>>> &
        Partial<PickU<D, Exclude<keyof D, keyof P>>>
  : never;

type ReactDefaultizedProps<C, P> = C extends { defaultProps: infer D }
  ? Defaultize<P, D>
  : P;

type MakeAttrsOptional<
  C extends string | React.ComponentType<any>,
  O extends object,
  A extends keyof P,
  P = React.ComponentPropsWithRef<
    C extends IntrinsicElementsKeys | React.ComponentType<any> ? C : never
  >
> =
  // Distribute unions early to avoid quadratic expansion
  P extends any
    ? OmitU<ReactDefaultizedProps<C, P> & O, A> & Partial<PickU<P & O, A>>
    : never;

export type StyledComponentProps<
  // The Component from whose props are derived
  C extends string | React.ComponentType<any>,
  // The Theme from the current context
  T extends object,
  // The other props added by the template
  O extends object,
  // The props that are made optional by .attrs
  A extends keyof any,
  // The Component passed with "forwardedAs" prop
  FAsC extends string | React.ComponentType<any> = C
> =
  // Distribute O if O is a union type
  O extends object
    ? WithOptionalTheme<
        MakeAttrsOptional<C, O, A> & MakeAttrsOptional<FAsC, O, A>,
        T
      >
    : never;

type StyledComponentPropsWithAs<
  C extends string | React.ComponentType<any>,
  T extends object,
  O extends object,
  A extends keyof any,
  AsC extends string | React.ComponentType<any> = C,
  FAsC extends string | React.ComponentType<any> = C
> = StyledComponentProps<C, T, O, A, FAsC> & {
  as?: AsC | undefined;
  forwardedAs?: FAsC | undefined;
};

// abuse Pick to strip the call signature from ForwardRefExoticComponent
type ForwardRefExoticBase<P> = PickU<
  React.ForwardRefExoticComponent<P>,
  keyof React.ForwardRefExoticComponent<any>
>;

type Attrs<P, A extends Partial<P>, T> =
  | ((props: ThemedStyledProps<P, T>) => A)
  | A;

// any doesn't count as assignable to never in the extends clause, and we default A to never
export type AnyStyledComponent =
  | StyledComponent<any, any, any, any>
  | StyledComponent<any, any, any>;

export type StyledComponent<
  C extends keyof JSXIntrinsicElementsMinimal | React.ComponentType<any>,
  T extends object,
  O extends object = {},
  A extends keyof any = never
> = // the "string" allows this to be used as an object key
  // I really want to avoid this if possible but it's the only way to use nesting with object styles...
  string &
    StyledComponentBase<C, T, O, A> &
    hoistNonReactStatics.NonReactStatics<
      C extends React.ComponentType<any> ? C : never
    >;

export interface StyledComponentBase<
  C extends string | React.ComponentType<any>,
  T extends object,
  O extends object = {},
  A extends keyof any = never
> extends ForwardRefExoticBase<StyledComponentProps<C, T, O, A>> {
  // add our own fake call signature to implement the polymorphic 'as' prop
  (
    props: StyledComponentProps<C, T, O, A> & {
      as?: never | undefined;
      forwardedAs?: never | undefined;
    }
  ): React.ReactElement<StyledComponentProps<C, T, O, A>>;
  <
    AsC extends string | React.ComponentType<any> = C,
    FAsC extends string | React.ComponentType<any> = AsC
  >(
    props: StyledComponentPropsWithAs<AsC, T, O, A, AsC, FAsC>
  ): React.ReactElement<StyledComponentPropsWithAs<AsC, T, O, A, AsC, FAsC>>;

  withComponent<WithC extends AnyStyledComponent>(
    component: WithC
  ): StyledComponent<
    StyledComponentInnerComponent<WithC>,
    T,
    O & StyledComponentInnerOtherProps<WithC>,
    A | StyledComponentInnerAttrs<WithC>
  >;
  withComponent<
    WithC extends keyof JSXIntrinsicElementsMinimal | React.ComponentType<any>
  >(
    component: WithC
  ): StyledComponent<WithC, T, O, A>;
}

export interface ThemedStyledFunctionBase<
  C extends keyof JSXIntrinsicElementsMinimal | React.ComponentType<any>,
  T extends object,
  O extends object = {},
  A extends keyof any = never
> {
  (first: TemplateStringsArray): StyledComponent<C, T, O, A>;
  (
    first:
      | TemplateStringsArray
      | CSSObject
      | InterpolationFunction<
          ThemedStyledProps<StyledComponentPropsWithRef<C> & O, T>
        >,
    ...rest: Array<
      Interpolation<ThemedStyledProps<StyledComponentPropsWithRef<C> & O, T>>
    >
  ): StyledComponent<C, T, O, A>;
  <U extends object>(
    first:
      | TemplateStringsArray
      | CSSObject
      | InterpolationFunction<
          ThemedStyledProps<StyledComponentPropsWithRef<C> & O & U, T>
        >,
    ...rest: Array<
      Interpolation<
        ThemedStyledProps<StyledComponentPropsWithRef<C> & O & U, T>
      >
    >
  ): StyledComponent<C, T, O & U, A>;
}

export interface ThemedStyledFunction<
  C extends keyof JSXIntrinsicElementsMinimal | React.ComponentType<any>,
  T extends object,
  O extends object = {},
  A extends keyof any = never
> extends ThemedStyledFunctionBase<C, T, O, A> {
  // Fun thing: 'attrs' can also provide a polymorphic 'as' prop
  // My head already hurts enough so maybe later...
  attrs<
    U,
    NewA extends Partial<StyledComponentPropsWithRef<C> & U> & {
      [others: string]: any;
    } = {}
  >(
    attrs: Attrs<StyledComponentPropsWithRef<C> & U, NewA, T>
  ): ThemedStyledFunction<C, T, O & NewA, A | keyof NewA>;

  withConfig: <Props extends O = O>(
    config: StyledConfig<StyledComponentPropsWithRef<C> & Props>
  ) => ThemedStyledFunction<C, T, Props, A>;
}

export type StyledFunction<
  C extends keyof JSXIntrinsicElementsMinimal | React.ComponentType<any>
> = ThemedStyledFunction<C, any>;

type ThemedStyledComponentFactories<T extends object> = {
  [TTag in keyof JSXIntrinsicElementsMinimal]: ThemedStyledFunction<TTag, T>;
};

export interface ThemedBaseStyledInterface<T extends object>
  extends ThemedStyledComponentFactories<T> {
  <C extends AnyStyledComponent>(component: C): ThemedStyledFunction<
    StyledComponentInnerComponent<C>,
    T,
    StyledComponentInnerOtherProps<C>,
    StyledComponentInnerAttrs<C>
  >;
  <C extends keyof JSXIntrinsicElementsMinimal | React.ComponentType<any>>(
    // unfortunately using a conditional type to validate that it can receive a `theme?: Theme`
    // causes tests to fail in TS 3.1
    component: C
  ): ThemedStyledFunction<C, T>;
}

// Helper type operators
// Pick that distributes over union types
export type PickU<T, K extends keyof T> = T extends any
  ? { [P in K]: T[P] }
  : never;
export type OmitU<T, K extends keyof T> = T extends any
  ? PickU<T, Exclude<keyof T, K>>
  : never;
type WithOptionalTheme<P extends { theme?: T | undefined }, T> = OmitU<
  P,
  'theme'
> & {
  theme?: T | undefined;
};

type AnyIfEmpty<T extends object> = keyof T extends never ? any : T;

export type StyledComponentInnerComponent<C extends React.ComponentType<any>> =
  C extends StyledComponent<infer I, any, any, any>
    ? I
    : C extends StyledComponent<infer I, any, any>
    ? I
    : C;
export type StyledComponentPropsWithRef<
  C extends keyof JSXIntrinsicElementsMinimal | React.ComponentType<any>
> = C extends AnyStyledComponent
  ? React.ComponentPropsWithRef<StyledComponentInnerComponent<C>>
  : React.ComponentPropsWithRef<C>;
export type StyledComponentInnerOtherProps<C extends AnyStyledComponent> =
  C extends StyledComponent<any, any, infer O, any>
    ? O
    : C extends StyledComponent<any, any, infer O>
    ? O
    : never;
export type StyledComponentInnerAttrs<C extends AnyStyledComponent> =
  C extends StyledComponent<any, any, any, infer A> ? A : never;
export interface ThemedBaseStyledInterface<T extends object>
  extends ThemedStyledComponentFactories<T> {
  <C extends AnyStyledComponent>(component: C): ThemedStyledFunction<
    StyledComponentInnerComponent<C>,
    T,
    StyledComponentInnerOtherProps<C>,
    StyledComponentInnerAttrs<C>
  >;
  <C extends keyof JSXIntrinsicElementsMinimal | React.ComponentType<any>>(
    // unfortunately using a conditional type to validate that it can receive a `theme?: Theme`
    // causes tests to fail in TS 3.1
    component: C
  ): ThemedStyledFunction<C, T>;
}

export type ThemedStyledInterface<T extends object> = ThemedBaseStyledInterface<
  AnyIfEmpty<T>
>;
export type StyledInterface = ThemedStyledInterface<DefaultTheme>;

const styled = _styled as unknown as StyledInterface;

export default styled;

export const css = _css;
