import { style } from "@vanilla-extract/css";
import {
  background1_color_var,
  text2_color_var,
  text3_color_var,
} from "./vars.css";
import { softAppear } from "./animation.css";

export const all_tags_container = style({
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: "1rem",
});

export const post_tag = style({
  marginBottom: "0.875rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  height: "2rem",
  borderRadius: "1rem",
  display: "inline-flex",
  alignItems: "center",
  marginRight: "0.875rem",
  textDecoration: "none",
  fontWeight: "500",
  justifyContent: "center",
  background: background1_color_var,
  animation: `${softAppear} 0.3s ease-in forwards`,
});

export const text_and_count_container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const tag_text = style({
  fontSize: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: text2_color_var,
});

export const tag_count = style({
  marginLeft: "0.3rem",
  fontSize: "0.875rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: text3_color_var,
});

// margin-bottom: 0.875rem;
//     background: var(--bg-tag);
//     padding-left: 1rem;
//     padding-right: 1rem;
//     height: 2rem;
//     border-radius: 1rem;
//     display: inline-flex;
//     -webkit-box-align: center;
//     align-items: center;
//     margin-right: 0.875rem;
//     color: var(--primary1);
//     text-decoration: none;
//     font-weight: 500;
//     font-size: 1rem;
