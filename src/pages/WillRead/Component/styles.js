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
  marginBottom: "10px",
  display: "flex",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "36px",
  lineHeight: "44px",
  color: "#2F2F48",
}));

export const NameWrapper = styled.span(() => ({
  margin: "-10px auto 5px 10px",
  display: "flex",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#2F2F48",
}));

export const AuthorWrapper = styled.span(() => ({
  marginLeft: "10px",
  marginBottom: "10px",
  display: "flex",
  fontFamily: "Roboto",
  fontSize: "13px",
  lineHeight: "15px",
  color: "#2F2F48",
}));
