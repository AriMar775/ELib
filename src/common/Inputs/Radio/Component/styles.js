import styled from "styled-components";

export const RadioWrapper = styled.div((props) => ({
  display: "flex",
}));

export const FlatBtnWrapper = styled.div((props) => ({
  backgroundColor: props.isActive ? "#90BAF9" : "#E7EDFF",
  marginLeft: props.marginLeft,
  marginRight: "10px",
  padding: "0 20px",
  height: "30px",
  boxShadow: props.isActive
    ? "inset 2px 2px 4px rgba(74, 104, 178, 0.5), inset -2px -2px 6px rgba(255, 255, 255, 0.3)"
    : "-2px -2px 5px rgba(255, 255, 255, 0.5), 2px 2px 5px rgba(90, 105, 158, 0.3)",
  borderRadius: "3px",

  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  color: props.isActive ? "white" : "#2F2F48",
  cursor: "pointer",
}));
