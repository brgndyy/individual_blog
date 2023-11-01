import { style } from "@vanilla-extract/css";
import { text3_color_var } from "./vars.css";

export const post_container = style({
  display: "flex",
  flexDirection: "column",
  width: "70%",
  margin: "1rem auto",
  boxShadow: "0 4px 16px 0 rgba(0,0,0,0.04)",
  transition: "box-shadow 0.2s ease-in 0s, transform 0.2s ease-in 0s",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",
  },
});

export const post_image_container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const post_image = style({
  width: "100%",
});

export const post_title_description_container = style({
  display: "flext",
  justifyContent: "center",
  alignItems: "center",
});

export const post_title = style({
  fontWeight: "bold",
  fontSize: "1.5rem",
  margin: "1rem 0",
  padding: "0.5rem",
});

export const post_description = style({
  fontSize: "1.125rem",
  color: text3_color_var,
  padding: "0.5rem",
});

export const post_info_container = style({});

export const post_date = style({
  fontSize: "0.875rem",
  color: text3_color_var,
  margin: "1rem 0",
  padding: "0.5rem",
});

export const post_comments_count = style({});

export const post_likes_count = style({});
