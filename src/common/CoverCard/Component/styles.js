import styled from "styled-components";

import editNumbers from "../../../assets/icons/edit-numbers.png";

export const CardWrapper = styled.div(() => ({
  position: "relative",
  marginRight: "20px",
  marginBottom: "20px",
  display: "flex",
  textAlign: "-webkit-center",
}));

export const ImageWrapper = styled.img(() => ({
  marginTop: "10px",
  width: "218px",
  height: "292px",
}));

export const SeriesWrapper = styled.div(() => ({
  position: "absolute",
  marginTop: "255px",
  marginLeft: "10px",
  padding: "5px",
  width: "208px",
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "19px",
  alignItems: "center",
  textAlign: "center",
  color: "#FFFFFF;",
  background: "rgba(144, 186, 249, 0.7)",
}));

export const ReadWrapper = styled.div(() => ({
  marginTop: "5px",
  padding: "0 10px 0 10px",
  display: "flex",
  justifyContent: "space-between",
}));

export const PercentReadWrapper = styled.div(() => ({
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#2f2f48",
}));

export const PagesReadWrapper = styled.div(() => ({
  padding: "6px 0 10px 0",
  fontFamily: "Roboto",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#2f2f48",
}));

export const NumberWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "justify",
}));

export const EditNumberIcon = styled.div(() => ({
  background: `url(${editNumbers})`,
  width: "16px",
  height: "16px",
}));

export const BlueBtnWrapper = styled.div(() => ({
  margin: "5px 0 10px 0",
  width: "218px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#90BAF9",
  boxShadow:
    "2px 2px 5px rgba(90, 105, 158, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(12, 22, 105, 0.1), inset 2px 2px 2px rgba(255, 255, 255, 0.25)",
  borderRadius: "3px",
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#FFFFFF",

  ":active": {
    boxShadow:
      "2px 2px 5px rgba(90, 105, 158, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.5), inset -2px -2px 2px rgba(255, 255, 255, 0.3), inset 2px 2px 2px rgba(64, 112, 184, 0.5), inset -1px -1px 2px rgba(0, 0, 0, 0.1), inset 2px 2px 2px rgba(255, 255, 255, 0.25)",
  },
}));
