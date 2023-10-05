import { createVar, style } from "@vanilla-extract/css";

export const root_background_color = createVar();

export const myStyle = style({
  vars: {
    root_background_color: "#fff",
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        root_background_color: "#000",
      },
    },
  },
});
