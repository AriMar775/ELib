import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../../common/Nav/Container";
import CoverCard from "../../../common/CoverCard/Container";
import {
  ContentWrapper,
  CardWrapper,
  ListWrapper,
  Header,
  NameWrapper,
  AuthorWrapper,
} from "./styles";

const Home = ({ books }) => {
  return (
    <Nav>
      <ContentWrapper>
        <Link
          to="/was-read"
          style={{ textDecoration: "none", maxWidth: "fit-content" }}
        >
          <Header>Читаю</Header>
        </Link>
        <ListWrapper>
          {books &&
            books.map(
              (item) =>
                item.category === "Читаю" && (
                  <CardWrapper>
                    <CoverCard
                      series={item.series}
                      category={item.category}
                      cover={item.cover}
                      progressPercent={item.progressPercent}
                      progressPages={item.progressPages}
                      releaseDate={item.releaseDate}
                      key={item.name}
                    />
                    <NameWrapper>{item.name}</NameWrapper>
                    <AuthorWrapper>{item.author}</AuthorWrapper>
                  </CardWrapper>
                )
            )}
        </ListWrapper>
        <Link
          to="/reading"
          style={{ textDecoration: "none", maxWidth: "fit-content" }}
        >
          <Header>Буду читать</Header>
        </Link>
        <ListWrapper>
          {books &&
            books.map(
              (item) =>
                item.category === "Буду читать" && (
                  <CardWrapper>
                    <CoverCard
                      series={item.series}
                      category={item.category}
                      cover={item.cover}
                      progressPercent={item.progressPercent}
                      progressPages={item.progressPages}
                      releaseDate={item.releaseDate}
                      key={item.name}
                    />
                    <NameWrapper>{item.name}</NameWrapper>
                    <AuthorWrapper>{item.author}</AuthorWrapper>
                  </CardWrapper>
                )
            )}
        </ListWrapper>
        <Link
          to="/will-read"
          style={{ textDecoration: "none", maxWidth: "fit-content" }}
        >
          <Header>Жду выхода</Header>
        </Link>
        <ListWrapper>
          {books &&
            books.map(
              (item) =>
                item.category === "Жду выхода" && (
                  <CardWrapper>
                    <CoverCard
                      series={item.series}
                      category={item.category}
                      cover={item.cover}
                      progressPercent={item.progressPercent}
                      progressPages={item.progressPages}
                      releaseDate={item.releaseDate}
                      key={item.name}
                    />
                    <NameWrapper>{item.name}</NameWrapper>
                    <AuthorWrapper>{item.author}</AuthorWrapper>
                  </CardWrapper>
                )
            )}
        </ListWrapper>
        <Link
          to="/waiting-for-release"
          style={{ textDecoration: "none", maxWidth: "fit-content" }}
        >
          <Header>Прочитано</Header>
        </Link>
        <ListWrapper>
          {books &&
            books.map(
              (item) =>
                item.category === "Прочитано" && (
                  <CardWrapper>
                    <CoverCard
                      series={item.series}
                      category={item.category}
                      cover={item.cover}
                      progressPercent={item.progressPercent}
                      progressPages={item.progressPages}
                      releaseDate={item.releaseDate}
                      key={item.name}
                    />
                    <NameWrapper>{item.name}</NameWrapper>
                    <AuthorWrapper>{item.author}</AuthorWrapper>
                  </CardWrapper>
                )
            )}
        </ListWrapper>
      </ContentWrapper>
    </Nav>
  );
};

export default Home;
