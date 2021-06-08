import { style } from "typestyle";
import { percent, px } from "csx";

export const wrapperStyle: string = style({
  height: px(85),
  background: "#FFFFFF0D",
});

export const widthStyle: string = style({
  maxWidth: px(1000),
  margin: `${0} auto`,
  height: percent(100),
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignContent: "center",
  alignItems: "center",
  padding: `${0} ${px(10)}`,
});

export const nameStyle: string = style({
  fontSize: px(18),
  maxWidth: px(135),
  display: "inline-block",
  margin: `${0} ${px(15)}`,
  lineHeight: px(25),
  textDecoration: "none",
  color: "#6A6868",
  fontWeight: 300,
  letterSpacing: px(3),
});
