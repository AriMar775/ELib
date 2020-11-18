import styled from "styled-components";

export const BlueBtnWrapper = styled.div((props) => ({
  backgroundColor: "#90baf9",
  width: props.width,
  height: props.height,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow:
    "-6px -6px 5px rgba(255,255,255,0.6),    4px 4px 10px rgba(90, 105, 158, 0.5),    inset 4px 4px 4px rgba(255, 255, 255, 0.25),    inset -2px -2px 4px rgba(0, 0, 0, 0.15)",
  borderRadius: "43px",
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "16px",

  textTransform: "uppercase",
  textDecoration: "none",
  color: "#FFFFFF",
  cursor: "pointer",
  "&:active": {
    boxShadow:
      "-6px -6px 5px rgba(255,255,255,0.6), 4px 4px 10px rgba(90, 105, 158, 0.5), inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset -2px -2px 4px rgba(0, 0, 0, 0.15), inset 2px 2px 2px rgba(64, 112, 184, 0.8), inset -2px -2px 2px rgba(255, 255, 255, 0.5)",
  },
}));
