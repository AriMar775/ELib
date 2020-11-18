import styled from "styled-components";

import logo from "../../assets/logo-medium.png";

export const NotFoundWrapper = styled.div(() => ({
  margin: "0 auto",
  height: "inherit",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "-webkit-center",
  background: "#E7EDFF",
}));

export const LogoWrapper = styled.div(() => ({
  margin: "50px auto 30px auto",
  width: "196.36px",
  height: "79.49px",
  background: `url(${logo})`,
}));

export const TextWrapper = styled.div(() => ({
  marginBottom: "30px",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "29px",
  color: "#2F2F48",
}));
