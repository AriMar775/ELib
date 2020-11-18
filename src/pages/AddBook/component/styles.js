import styled from "styled-components";

export const MainWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const HWrapper = styled.div(() => ({
  display: "flex",
}));

export const VWrapper = styled.div((props) => ({
  marginBottom: props ? props.marginBottom : 0,
}));

export const Mark = styled.span(() => ({
  marginTop: "-50px",
  marginLeft: "70px",
  position: "relative",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#9AA3C2",
}));

export const InputWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const LabelInput = styled.label(() => ({
  fontSize: "14px",
  lineHeight: "16px",
  color: "#2F2F48",
  textTransform: "capitalize",
}));

export const BtnWrapper = styled.div(() => ({
  marginTop: "10px",
  marginBottom: "20px",
  display: "flex",
}));

export const ConfirmBtnWrapper = styled.div(() => ({
  width: "338px",
  display: "flex",
  justifyContent: "space-between",
}));

export const SubmitBtn = styled.button(() => ({
  background: "transparent",
  border: "none",

  ":focus": {
    outline: "none",
  },
}));

export const HiddenSeriesFieldWrapper = styled.div((props) => ({
  display: props.isShowSeries ? "block" : "none",
}));

export const HiddenCollectionsFieldWrapper = styled.div((props) => ({
  display: props.isShowCollection ? "block" : "none",
}));

export const HiddenFinishDateFieldWrapper = styled.div((props) => ({
  display: props.isShowFinishDate ? "block" : "none",
}));

export const HiddenProgressFieldWrapper = styled.div((props) => ({
  display: props.isShowProgress ? "flex" : "none",
  alignItems: "center",
}));

export const HiddenProgressPercentFieldWrapper = styled.div((props) => ({
  display: props.isProgressInPercent ? "flex" : "none",
}));

export const HiddenProgressPagesFieldWrapper = styled.div((props) => ({
  display: !props.isProgressInPercent ? "flex" : "none",
}));
export const CurrentFieldValueWrapper = styled.span(() => ({
  marginTop: "-16px",
  display: "flex",
  fontSize: "13px",
  lineHeight: "15px",
  color: "#9AA3C2",
}));
