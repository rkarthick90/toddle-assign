import palette from "./palette";
import colors from "./colors";
import typography from "./typography";

const unit = 4;

const overrides = {
  common: {
    borderBottom: { borderBottom: "1px solid #eee" },
  },
  weight: {
    title: 500,
  },
  size: {
    default: "14px",
  },
  text: {
    reverse: "#fff",
    inactive: "#777",
    default: "#393939",
    dark: "#000",
    white: "#FFF",
    placeholder: "#898989",
  },
  bg: {
    dark: "#000",
    default: "#2f2f65",
    inactive: "#999",
    lightgrey: "#dadfe3",
    border: "#ddd",
    reverse: "#ebeef0",
  },
};

const fonts = {
  weight: {
    normal: 400,
    medium: 500,
    littlebold: 600,
    bold: 700,
  },
  size: {
    default: "14px",
    small: "13px",
  },
};

const spacing = {
  xxsmall: unit + "px",
  xsmall: unit * 2 + "px",
  small: unit * 4 + "px",
  medium: unit * 6 + "px",
  large: unit * 8 + "px",
  xlarge: unit * 10 + "px",
  xxlarge: unit * 14 + "px",
};

export {
  palette,
  colors,
  typography,
  fonts,
  spacing,
  // ...overrides
};

export default {
  palette,
  colors,
  typography,
  ...overrides,
};
