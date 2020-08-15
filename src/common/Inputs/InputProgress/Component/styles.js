import styled from "styled-components";

export const InputWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const Label = styled.label(() => ({
  fontSize: "14px",
  lineHeight: "16px",
  color: "#2F2F48",
}));

export const InputItem = styled.input((props) => ({
  background: "transparent",
  marginRight: "20px",
  marginBottom: "20px",
  padding: "0 0 0 5px",
  width: props.width,
  height: "40px",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#2F2F48",
  border: "none",
  borderBottom: "1px solid #2F2F48",

  ":focus": {
    outline: "none",
  },

  "::placeholder": {
    fontSize: "16px",
    lineHeight: "19px",
    color: "#9AA3C2",
  },

  "&[type='number']": {
    appearance: "textfield",
  },

  "&[type='number']::-webkit-inner-spin-button": {
    appearance: "none",
    margin: 0,
  },
}));
