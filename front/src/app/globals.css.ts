import { globalStyle } from "@vanilla-extract/css";
import { root_background_color } from "./_styles/vars.css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: "0",
  width: "100vw",
  minHeight: "100vh",
  height: "auto",
  overflow: "scroll",
  transition: "all 0.3s ease",
  position: "relative",
  background: root_background_color,
});

globalStyle("h1, h2, h3, p", {
  margin: "0",
  padding: "0",
});

globalStyle("a, a:link, a:visited, a:hover", {
  textDecoration: "none",
});

globalStyle("li", {
  listStyle: "none",
});

globalStyle("ul", {
  paddingLeft: "0",
  margin: "0",
});
