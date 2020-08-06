// Default Theme
const defaultTheme = {
  background: '#f0f0f7',
  primaryLighter: '#9871f5',
  primaryLight: '#916bea',
  primary: '#8257e5',
  primaryDark: '#774dd6',
  primaryDarker: '#6842c2',
  secundary: '#04d361',
  secundaryDark: '#04bf58',
  titleInPrimary: '#fff',
  textInPrimary: '#d4c2ff',
  textTitle: '#32264d',
  textComplement: '#9c98a6',
  textBase: '#6a6180',
  lineInWhite: '#e6e6f0',
  inputBackground: '#f8f8fC',
  buttonText: '#fff',
  boxBase: '#fff',
  boxFooter: '#fafafc',
};

type ColorSchema = typeof defaultTheme;

// Dark Theme
const darkTheme: ColorSchema = {
  ...defaultTheme,
};

export default {
  ...defaultTheme,
  modes: {
    dark: darkTheme,
  },
};
