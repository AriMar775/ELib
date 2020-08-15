import styled from "styled-components";

export const WhiteBtnWrapper = styled.div((props) => ({
  backgroundColor: "#E7EDFF",
  width: props.width,
  height: props.height,
  boxShadow:
    "-4px -4px 6px rgba(255, 255, 255, 0.7), 4px 4px 6px rgba(90, 105, 158, 0.3), inset -2px -2px 4px rgba(165, 169, 210, 0.4), inset 2px 2px 11px rgba(255, 255, 255, 0.5)",
  borderRadius: "47px",

  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  textDecoration: "none",
  color: "#90BAF9",
  cursor: "pointer",

  "&:active": {
    boxShadow:
      "-4px -4px 6px rgba(255,255,255,0.7), 4px 4px 6px rgba(90,105,158,0.3), inset -1px -1px 2px rgba(255,255,255,0.8), inset 1px 1px 2px rgba(124,178,227,0.5), inset -2px -2px 4px rgba(165,169,210,0.4)",
  },
}));
