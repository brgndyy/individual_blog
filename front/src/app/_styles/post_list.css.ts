import { style } from "@vanilla-extract/css";
import { softAppear } from "./animation.css";

export const post_list_ul = style({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridTemplateRows: "auto",
  gap: "1rem",
  justifyContent: "center",
  animation: `${softAppear} 0.3s ease-in forwards`,
  width: "70%",
  margin: "auto",
});
