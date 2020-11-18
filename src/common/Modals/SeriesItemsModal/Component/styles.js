import styled from "styled-components";

export const ModalBgWrapper = styled.div(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(177, 194, 237, 0.3)",
  overflow: "hidden",
}));

export const ModalWrapper = styled.div(() => ({
  top: "50%",
  left: "50%",
  padding: "30px",
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transform: "translate(-50%, -50%)",
  background: "#E7EDFF",
  boxShadow:
    "2px 2px 5px rgba(90, 105, 158, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.2)",
  borderRadius: "5px",
}));

export const Header = styled.span(() => ({
  fontFamily: "Montserrat",
  fontweight: "bold",
  fontsize: "24px",
  lineheight: "29px",
  color: "#2F2F48",
}));
