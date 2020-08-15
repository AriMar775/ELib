import React from "react";
import { Link } from "react-router-dom";

import {
  NavWrapper,
  Menu,
  Header,
  Content,
  Logo,
  LogoAndMenuWrapper,
  MenuItems,
  Label,
  MenuItem,
  WasReadIcon,
  ReadingIcon,
  WillReadIcon,
  WaitingIcon,
  CollectionsIcon,
  StatsIcon,
  Text,
  BtnWrapper,
  NotificationWrapper,
  SearchInput,
  OuterCircle,
  InnerCircle,
  NotificationIcon,
  WhiteBtnWrapper,
} from "./styles";
import BlueBtn from "../../Buttons/BlueBtn";
import WhiteBtn from "../../Buttons/WhiteBtn";

const Nav = (props) => {
  return (
    <NavWrapper>
      <Menu>
        <LogoAndMenuWrapper>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
          <MenuItems>
            <Label>Библиотека</Label>
            <Link to="/was-read" style={{ textDecoration: "none" }}>
              <MenuItem>
                <WasReadIcon />
                <Text>Прочитано</Text>
              </MenuItem>
            </Link>
            <Link to="/reading" style={{ textDecoration: "none" }}>
              <MenuItem>
                <ReadingIcon />
                <Text>Читаю</Text>
              </MenuItem>
            </Link>
            <Link to="/will-read" style={{ textDecoration: "none" }}>
              <MenuItem>
                <WillReadIcon />
                <Text>Буду читать</Text>
              </MenuItem>
            </Link>
            <Link to="/waiting" style={{ textDecoration: "none" }}>
              <MenuItem>
                <WaitingIcon />
                <Text>Жду выхода</Text>
              </MenuItem>
            </Link>
            <Label>Другое</Label>
            <Link to="/collections" style={{ textDecoration: "none" }}>
              <MenuItem>
                <CollectionsIcon />
                <Text>Коллекции</Text>
              </MenuItem>
            </Link>
            <Link to="/stats" style={{ textDecoration: "none" }}>
              <MenuItem>
                <StatsIcon />
                <Text>Статистика</Text>
              </MenuItem>
            </Link>
          </MenuItems>
        </LogoAndMenuWrapper>
        <Link to="/add-book" style={{ textDecoration: "none" }}>
          <BtnWrapper>
            <BlueBtn width="199px" height="50px">
              Добавить книгу
            </BlueBtn>
          </BtnWrapper>
        </Link>
      </Menu>

      <Header>
        <SearchInput placeholder="Поиск..."></SearchInput>
        <NotificationWrapper>
          <OuterCircle>
            <InnerCircle>
              <NotificationIcon>{props.counter}</NotificationIcon>
            </InnerCircle>
          </OuterCircle>
        </NotificationWrapper>
        <WhiteBtnWrapper>
          <WhiteBtn width="101px" height="40px">
            Выход
          </WhiteBtn>
        </WhiteBtnWrapper>
      </Header>

      <Content>{props.children}</Content>
    </NavWrapper>
  );
};

export default Nav;
