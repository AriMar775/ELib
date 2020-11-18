import styled from "styled-components";

export const RadioWrapper = styled.div(() => ({
  display: "flex",
}));

export const FlatBtnWrapper = styled.div((props) => ({
  marginLeft: props.marginLeft,
  marginRight: "10px",
  padding: "0 20px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: props.isActive ? "#90BAF9" : "#E7EDFF",
  boxShadow: props.isActive
    ? "inset 2px 2px 4px rgba(74, 104, 178, 0.5), inset -2px -2px 6px rgba(255, 255, 255, 0.3)"
    : "-2px -2px 5px rgba(255, 255, 255, 0.5), 2px 2px 5px rgba(90, 105, 158, 0.3)",
  borderRadius: "3px",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "16px",
  textDecoration: "none",
  color: props.isActive ? "white" : "#2F2F48",
  cursor: "pointer",
}));
