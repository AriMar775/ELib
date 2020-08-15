import styled from "styled-components";

import logo from "../../assets/logo-medium.png";

export const NotFoundWrapper = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "-webkit-center",
  height: "inherit",
  background: "#E7EDFF",
  margin: "0 auto",
}));

export const LogoWrapper = styled.div(() => ({
  background: `url(${logo})`,
  width: "196.36px",
  height: "79.49px",
  margin: "50px auto 30px auto",
}));

export const TextWrapper = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "29px",
  color: "#2F2F48",
}));
