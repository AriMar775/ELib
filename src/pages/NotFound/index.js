import React from "react";
import { Link } from "react-router-dom";

import Card from "../../common/Card";
import BlueBtn from "../../common/Buttons/BlueBtn";
import { NotFoundWrapper, TextWrapper, LogoWrapper } from "./styles";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Card width="360px" height="317px">
        <LogoWrapper />
        <TextWrapper>Страница не найдена</TextWrapper>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <BlueBtn width="292px" height="50px">
            Перейти на главную
          </BlueBtn>
        </Link>
      </Card>
    </NotFoundWrapper>
  );
};

export default NotFound;
