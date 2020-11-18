import styled from "styled-components";

import logo from "../../../assets/logo-small.png";
import wasRead from "../../../assets/icons/was-read.png";
import reading from "../../../assets/icons/reading.png";
import willRead from "../../../assets/icons/will-read.png";
import waiting from "../../../assets/icons/waiting.png";
import collections from "../../../assets/icons/collections.png";
import stats from "../../../assets/icons/stats.png";
import search from "../../../assets/icons/search.png";
import notification from "../../../assets/icons/notification.png";

export const NavWrapper = styled.div(() => ({
  height: "inherit",
  display: "grid",
  gridTemplateAreas: "'menu header' 'menu content'",
  gridTemplateColumns: "240px 1fr",
  gridTemplateRows: "70px 1fr",
  fontFamily: "Roboto",
  background: "#E7EDFF",
}));

export const Menu = styled.div(() => ({
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gridArea: "menu",
}));

export const Logo = styled.div(() => ({
  margin: "22px auto 50px auto",
  width: "99px",
  height: "40px",
  background: `url(${logo})`,
  cursor: "pointer",
}));

export const LogoAndMenuWrapper = styled.div(() => ({}));

export const MenuItems = styled.div(() => ({}));

export const Label = styled.span(() => ({
  marginTop: "30px",
  marginLeft: "20px",
  display: "flex",
  fontSize: "13px",
  lineHeight: "15px",
  color: "#9AA3C2",
}));

export const MenuItem = styled.div(() => ({
  marginTop: "20px",
  marginLeft: "20px",
  display: "flex",
  cursor: "pointer",
}));

export const WasReadIcon = styled.div(() => ({
  marginLeft: "3px",
  width: "15px",
  height: "12px",
  background: `url(${wasRead})`,
}));

export const ReadingIcon = styled.div(() => ({
  marginLeft: "1px",
  width: "17px",
  height: "16px",
  background: `url(${reading})`,
}));

export const WillReadIcon = styled.div(() => ({
  marginLeft: "0",
  width: "18px",
  height: "18px",
  background: `url(${willRead})`,
}));

export const WaitingIcon = styled.div(() => ({
  marginLeft: "3px",
  width: "14px",
  height: "11px",
  background: `url(${waiting})`,
  backgroundRepeat: "no-repeat",
}));

export const CollectionsIcon = styled.div(() => ({
  width: "17px",
  height: "17px",
  background: `url(${collections})`,
}));

export const StatsIcon = styled.div(() => ({
  width: "17px",
  height: "17px",
  background: `url(${stats})`,
}));

export const Text = styled.span(() => ({
  marginLeft: "20px",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#2F2F48",

  ":active": {
    fontWeight: "600",
  },
}));

export const BtnWrapper = styled.div(() => ({
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
}));

export const Header = styled.div(() => ({
  marginTop: "20px",
  display: "flex",
  gridArea: "header",
}));

export const SearchInput = styled.input(() => ({
  paddingLeft: "20px",
  width: "100%",
  fontFamily: "Roboto",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#9AA3C2",
  border: "none",
  background: `url(${search}) no-repeat scroll 0 18px`,

  ":focus": {
    outline: "none",
  },

  "::placeholder": {
    color: "#9AA3C2",
  },
}));

export const NotificationWrapper = styled.div(() => ({
  margin: "auto 0 auto 20px",
  cursor: "pointer",
}));

export const OuterCircle = styled.div(() => ({
  width: "40px",
  height: "41px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "34px",
  background: "#E7EDFF",
  boxShadow:
    "-4px -4px 5px rgba(255, 255, 255, 0.9), 2px 2px 8px rgba(90, 105, 158, 0.5)",
}));

export const InnerCircle = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "34px",
  width: "40px",
  height: "41px",
  boxShadow:
    "-2px -2px 5px rgba(255, 255, 255, 0.5), 2px 2px 5px rgba(90, 105, 158, 0.3), inset 2px 2px 2px rgba(255, 255, 255, 0.25), inset -1px -1px 2px rgba(12, 22, 105, 0.1)",
  background: "#90BAF9",
  ":active": {
    width: "38px",
    height: "39px",
    boxShadow:
      "inset 2px 2px 4px rgba(74, 104, 179, 0.5), inset -2px -2px 4px rgba(255, 255, 255, 0.3)",
  },
}));

export const NotificationIcon = styled.div(() => ({
  width: "20px",
  height: "21px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "14px",
  color: "#90BAF9",
  background: `url(${notification})`,
}));

export const WhiteBtnWrapper = styled.div(() => ({
  margin: "auto 30px auto 20px",
}));

export const Content = styled.div(() => ({
  marginTop: "30px",
  paddingBottom: "20px",
  gridArea: "content",
  overflowY: "scroll",
}));
