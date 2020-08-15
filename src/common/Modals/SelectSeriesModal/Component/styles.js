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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "fixed",
  padding: "30px",
  top: "50%",
  left: "50%",
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

export const SeriesListWrapper = styled.div(() => ({
  margin: "20px auto 0 auto",
  width: "100%",
  borderTop: "1px solid #9AA3C2",
}));

export const SeriesItem = styled.div(() => ({
  padding: "10px",
  borderBottom: "1px solid #9AA3C2",
  fontFamily: "Roboto",
  fontSize: "16px",
  color: "#2F2F48",
}));
