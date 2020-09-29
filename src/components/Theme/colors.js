import palette from "./palette";

const {
  jade,
  dodger,
  elephant,
  raven,
  chateau,
  zircon,
  porcelain,
  smoke,
  athens,
  pearlLusta,
  brand,
  scotchMist,
  permission,
} = palette;

export default {
  primary: jade,
  link: dodger,
  radio: {
    background: "#FFF",
    border: "#BEBEBE",
    backgroundSelected: "#647dfc",
    borderSelected: "#2C90FC",
    backgroundDisabled: "#F6F6F6",
    borderDisabled: "#CCC",
    shadow: "rgba(0,0,0,0.20)",
    shadowDisabled: "rgba(0,0,0,0.10)",
  },
  input: {
    disabled: "#f1f1f1",
  },
  base: {
    white: "#FFF",
    black: "#000",
    default: "#333",
    gray: "#979797",
    grayDarkest: "#676767",
    grayDark: "#636363",
    grayMedium: "#A8A8A8",
    grayLight: "#D9D9D9",
    grayLightest: "#F1F1F1",
    blueDarker: "#097093",
    blue: "#0a84ae",
    blueLight: "#44c7f4",
    blueLightest: "#f5f7f9",
    orange: "#eb5424",
    orangeLighter: "#ff784d",
    orangeLightest: "#ffb299",
    orangeDark: "#FF3E00",
    greenDarker: "#3F6910",
    green: "#4CD964",
    red: "#FF0000",
    redDarker: "#801F00",
    yellow: "#786600",
  },
  text: {
    primary: elephant,
    secondary: raven,
    disabled: chateau,
    placeholder: raven,
  },
  icon: {
    primary: raven,
    secondary: elephant,
  },
  border: {
    primary: zircon,
    secondary: porcelain,
    hover: elephant,
    active: brand,
    disabled: porcelain,
    error: permission,
  },
  background: {
    primary: porcelain,
    hover: smoke,
    disabeld: smoke,
    error: permission,
  },
  layout: {
    asidePane: athens,
  },
  components: {
    table: {
      selection: pearlLusta,
    },
    alert: {
      background: scotchMist,
    },
  },
};
