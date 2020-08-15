import styled from "styled-components";

export const FlatBtnWrapper = styled.div((props) => ({
  backgroundColor: "#E7EDFF",
  marginRight: "10px",
  padding: props.width ? "0" : "0 20px",
  width: props.width || "auto",
  height: "30px",
  boxShadow:
    "-2px -2px 5px rgba(255, 255, 255, 0.5), 2px 2px 5px rgba(90, 105, 158, 0.3)",
  borderRadius: "3px",

  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  color: "#2F2F48",
  cursor: "pointer",
  userSelect: "none",

  "&:active": {
    boxShadow: "inset 0px 0px 4px rgba(74, 104, 178, 0.5)",
  },
}));
