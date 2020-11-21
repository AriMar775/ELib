import styled from "styled-components";

import plus from "../../../assets/icons/plus.png";
import minus from "../../../assets/icons/minus.png";
import edit from "../../../assets/icons/edit.png";
import deleteIcon from "../../../assets/icons/delete.png";

export const HWrapper = styled.div(() => ({
  display: "flex",
}));

export const VWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const CommentWrapper = styled.div(() => ({
  maxWidth: "435px",
  display: "flex",
  flexDirection: "column",
}));

export const AdvWrapper = styled.div(() => ({
  marginRight: "20px",
  maxWidth: "435px",
  display: "flex",
}));

export const Title = styled.span(() => ({
  display: "flex",
  marginBottom: "20px",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#2F2F48",
}));

export const BlueTitle = styled.span(() => ({
  marginBottom: "10px",
  display: "flex",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#90BAF9",
}));

export const SubTitle = styled.span(() => ({
  marginRight: "5px",
  marginBottom: "10px",
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
  marginRight: "20px",
  minWidth: "20px",
  height: "20px",
  background: `url(${plus})`,
}));

export const MinusWrapper = styled.div(() => ({
  marginTop: "12px",
  marginRight: "20px",
  minWidth: "20px",
  height: "20px",
  background: `url(${minus})`,
  backgroundRepeat: "no-repeat",
}));

export const BtnWrapper = styled.div(() => ({
  marginBottom: "-30px",
  maxWidth: "949px",
  display: "flex",
  justifyContent: "flex-end",
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
