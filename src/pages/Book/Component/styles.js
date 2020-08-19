import styled from "styled-components";

import plus from "../../../assets/icons/plus.png";
import minus from "../../../assets/icons/minus.png";
import edit from "../../../assets/icons/edit.png";
import deleteIcon from "../../../assets/icons/delete.png";
import editNumbers from "../../../assets/icons/edit-numbers.png";

export const HWrapper = styled.div(() => ({
  display: "flex",
}));

export const VWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const CommentWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "435px",
}));

export const AdvWrapper = styled.div(() => ({
  display: "flex",
  maxWidth: "435px",
  marginRight: "20px",
}));

export const CardWrapper = styled.div(() => ({
  display: "flex",
  textAlign: "-webkit-center",
  marginRight: "20px",
  marginBottom: "20px",
}));

export const ImageWrapper = styled.img(() => ({
  marginTop: "10px",
  width: "218px",
  height: "292px",
}));

export const SeriesWrapper = styled.div(() => ({
  position: "absolute",
  padding: "5px",
  marginTop: "255px",
  marginLeft: "10px",
  width: "208px",
  background: "rgba(144, 186, 249, 0.7)",
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "19px",
  alignItems: "center",
  textAlign: "center",
  color: "#FFFFFF;",
}));

export const Title = styled.span(() => ({
  display: "flex",
  marginBottom: "10px",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#2F2F48",
}));

export const BlueTitle = styled.span(() => ({
  display: "flex",
  marginBottom: "10px",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#90BAF9",
}));

export const SubTitle = styled.span(() => ({
  marginBottom: "10px",
  marginRight: "5px",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#2F2F48",
}));

export const TextAbout = styled.span(() => ({
  fontFamily: "Roboto",
  fontSize: "14px",
  lineHeight: "16px",
}));

export const Text = styled.span(() => ({
  marginBottom: "20px",
  display: "flex",
  fontFamily: "Roboto",
  maxWidth: "691px",
  fontSize: "16px",
  lineHeight: "150%",
  color: "#2F2F48",
}));

export const PlusWrapper = styled.div(() => ({
  marginTop: "4px",
  minWidth: "20px",
  height: "20px",
  marginRight: "20px",
  background: `url(${plus})`,
}));

export const MinusWrapper = styled.div(() => ({
  minWidth: "20px",
  height: "20px",
  marginTop: "12px",
  marginRight: "20px",
  background: `url(${minus})`,
  backgroundRepeat: "no-repeat",
}));

export const BtnWrapper = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-end",
  maxWidth: "949px",
  marginBottom: "-30px",
}));

export const BtnBg = styled.div(() => ({
  marginLeft: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "35px",
  height: "35px",
  left: "1103px",
  background: "#E7EDFF",
  boxShadow:
    "2px 2px 5px rgba(90, 105, 158, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.5)",
  borderRadius: "18px",
  zIndex: "1",
  cursor: "pointer",

  ":active": {
    boxShadow: "inset 0px 0px 4px rgba(74, 104, 178, 0.5)",
  },
}));

export const EditIcon = styled.div(() => ({
  minWidth: "18px",
  height: "18px",
  background: `url(${edit})`,
  backgroundRepeat: "no-repeat",
}));

export const DeleteIcon = styled.div(() => ({
  minWidth: "20px",
  height: "20px",
  background: `url(${deleteIcon})`,
  backgroundRepeat: "no-repeat",
}));

export const ReadWrapper = styled.div(() => ({
  marginTop: "5px",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 10px 0 10px",
}));

export const PercentReadWrapper = styled.div(() => ({
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#2f2f48",
}));

export const PagesReadWrapper = styled.div(() => ({
  padding: "5px 0 10px 0",
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "5px 0 10px 0",
  width: "218px",
  height: "30px",
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
