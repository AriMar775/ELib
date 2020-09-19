import styled from "styled-components";

export const ContentWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const CardWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const ListWrapper = styled.div(() => ({
  display: "flex",
  overflowX: "scroll",
}));

export const Header = styled.span(() => ({
  display: "flex",
  marginBottom: "10px",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "36px",
  lineHeight: "44px",
  color: "#2F2F48",
}));

export const NameWrapper = styled.span(() => ({
  display: "flex",
  margin: "-10px auto 5px 10px",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#2F2F48",
}));

export const AuthorWrapper = styled.span(() => ({
  display: "flex",
  marginLeft: "10px",
  marginBottom: "10px",

  fontFamily: "Roboto",
  fontSize: "13px",
  lineHeight: "15px",
  color: "#2F2F48",
}));
