import { createVar, style } from "@vanilla-extract/css";

export const root_background_color = createVar();
export const header_background_color = createVar();
export const background1_color_var = createVar();
export const background2_color_var = createVar();
export const background3_color_var = createVar();
export const text1_color_var = createVar();
export const text2_color_var = createVar();
export const text3_color_var = createVar();

export const myStyle = style({
  vars: {
    [root_background_color]: "#fff",
    [header_background_color]: "#fff",
    [background1_color_var]: "#F8F9FA",
    [background2_color_var]: "#fff",
    [background3_color_var]: "#fff",
    [text1_color_var]: "#000",
    [text2_color_var]: "#212529",
    [text3_color_var]: "#495057",
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [root_background_color]: "#202125",
        [header_background_color]: "#202125",
        [background1_color_var]: "#fff",
        [background2_color_var]: "#fff",
        [background3_color_var]: "#fff",
        [text1_color_var]: "#000",
        [text2_color_var]: "#ECECEC",
        [text3_color_var]: "#d9d9d9",
      },
    },
  },
});
