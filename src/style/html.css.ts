import { cssRaw } from "typestyle";
import { fonts } from "./fonts.css";
import { hoGrey } from "./colors.css";

export const temp = cssRaw(`
html {
  font-family: ${fonts.comfortaa};
  background-color: ${hoGrey};
}

body {
  margin: 0;
}
`);
