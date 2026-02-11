import { style, globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  margin: "0",
  padding: "0",
  backgroundColor: "#CCC",
});
export const FieldsetStyle = style({
  margin: "20px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
export const RowStyle = style({
  display: "flex",
  gap: "20px",
});
export const LabelStyle = style({
  width: "100%",
  color: "rgba(0, 0, 0, 0.5)",
  fontSize: "14px",
  display: "flex",
  flexDirection: "column",
});
export const InputStyle = style({
  marginTop: "5px",
  padding: "10px",
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
  border: "1px solid #CCC",
  borderRadius: "5px",
});
export const ButtonStyle = style({
  padding: "10px 20px",
  fontSize: "16px",
  fontFamily: "Arial, sans-serif",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#007BFF",
  color: "#FFF",
  cursor: "pointer",
});
