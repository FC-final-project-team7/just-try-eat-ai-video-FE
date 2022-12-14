const bg = {
  main: '#13141E',
  sub: '#222426',
  modal: 'rgba(41, 41, 81, 0.8)',
  preview: '#F1F1F1;',
} as const;

const colors = {
  main: {
    purple: '#5C4DF7',
    green: '#2ED573',
    blue: '#002868',
  },
  sub: {
    blueGray: '#33354C',
    gray: '#333333',
    red: '#FF6040',
    purple: '#B1A9FF',
  },
  gray400: '#5E5D6D',
  gray300: '#B0B0B0',
  gray200: '#DEDDDD',
  gray100: '#FFFFFF',
} as const;

const textColors = {
  light: colors.gray100,
  dark: bg.main,
} as const;

const buttonsSize = {
  small: {
    w: '168px',
    h: '40px',
  },
  big: {
    w: '392px',
    h: '48px',
  },
} as const;

// FIXME 각 페이지나 컴포넌트 style 로 이동하는 것이 좋아 보인다
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buttonsSizeCalc = {
  gnb: {
    w: '136px',
    h: buttonsSize.small.h,
  },
  modal: {
    small: {
      w: '148px',
      h: buttonsSize.big.h,
    },
    big: {
      w: '328px',
      h: buttonsSize.big.h,
    },
  },
} as const;

const fontSize = {
  xxxLarge: '40px',
  xxLarge: '32px',
  xLarge: '24px',
  large: '20px',
  medium: '16px',
  small: '14px',
} as const;

const fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
} as const;

const flex = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexAround: `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  flexColumn: `
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  flexColumnStart: `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  `,
  flexBetween: `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
} as const;

const theme = {
  bg,
  colors,
  textColors,
  buttonsSize,
  fontSize,
  fontWeight,
  flex,
} as const;

export default theme;
