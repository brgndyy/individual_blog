import { style, keyframes } from "@vanilla-extract/css";
import { softAppear } from "./animation.css";
import { header_background_color } from "./vars.css";

export const header_container = style({
  top: "0",
  left: "0",
  right: "0",
  position: "fixed",
  margin: "auto",
  zIndex: "700",
  width: "85%",
  height: "4.5rem",
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  animation: `${softAppear} 0.3s ease-in forwards`,
  transition: "all 0.3s ease",
  background: header_background_color,
});

export const header_category_container = style({
  display: "flex",
  alignItems: "center",
  position: "relative",
});

export const header_link = style({
  position: "relative",
  marginTop: "7px",
  marginLeft: "7px",
  marginRight: "7px",
  fontSize: "1.25rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s",
  "::before": {
    content: "",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "85%",
    border: "0.5px solid",
    //   background: container_background_var,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.1s ease",
  },
  selectors: {
    "&:hover::before": {
      transform: "scaleX(1)",
    },
  },
});

export const link = style({
  marginRight: "10px",
  marginTop: "5px",
  marginBottom: "5px",
});

export const toggle_label = style({
  width: "5.5rem",
  height: "2rem",
  position: "relative",
  display: "block",
  background: "#ebebeb",
  borderRadius: "17rem",
  marginTop: "5px",
  marginRight: "5px",
  boxShadow:
    "inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4)",
  cursor: "pointer",
  transition: "all 0.3s",

  "::after": {
    content: "",
    width: "1.5rem",
    height: "1.5rem",
    position: "absolute",
    top: "4px",
    left: "3px",
    borderRadius: "17rem",
    background: "linear-gradient(180deg, #ffcc89, #d8860b)",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s",
  },
});

// input:checked + label
export const toggle_input = style({
  width: "0",
  height: "0",
  visibility: "hidden",
});

// input :checked + label :after
export const toggle_label_checked = style({
  background: "#242424",
  "::after": {
    left: "5.3rem",
    transform: "translateX(-100%)",
    background: "linear-gradient(180deg, #fff, #3a3a3a)",
  },
});

// export const icon = style({
//   position: "absolute",
//   width: "4rem",
//   top: "40px",
//   zIndex: "100",
// });

// export const sun_icon = style({
//   left: "40px",
//   fill: "#fff",
//   transition: "0.3s",
// });

// export const moon_icon = style({
//   left: "340px",
//   fill: "#7e7e7e",
//   transition: "0.3s",
// });
