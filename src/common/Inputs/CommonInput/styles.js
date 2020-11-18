import styled from "styled-components";

export const InputWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const Label = styled.label(() => ({
  fontSize: "14px",
  lineHeight: "16px",
  color: "#2F2F48",
  textTransform: "capitalize",
}));

export const InputItem = styled.input((props) => ({
  marginRight: "20px",
  marginBottom: "20px",
  padding: "0 0 0 5px",
  width: props.width,
  height: "40px",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#2F2F48",
  background: "transparent",
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

export const TextAreaWrapper = styled.textarea(() => ({
  fontFamily: "Roboto",
  background: "transparent",
  paddingLeft: "5px",
  marginTop: "10px",
  marginRight: "20px",
  marginBottom: "20px",
  width: "356px",
  height: "120px",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#2F2F48",
  border: "none",
  borderBottom: "1px solid #2F2F48",
  resize: "none",

  ":focus": {
    outline: "none",
  },

  "::placeholder": {
    fontSize: "16px",
    lineHeight: "19px",
    color: "#9AA3C2",
  },
}));

export const Select = styled.select(() => ({
  background: "transparent",
  marginBottom: "20px",
  padding: "2px",
  width: "99px",
  height: "40px",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#2F2F48",
  border: "none",
  borderBottom: "1px solid #2F2F48",

  ":focus": {
    outline: "none",
  },
}));

export const Option = styled.option(() => ({
  background: "#E7EDFF",
  paddingTop: "20px",
  color: "#2F2F48",
  boxShadow: "none",
}));
