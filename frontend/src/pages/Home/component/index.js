import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Nav from "../../../common/Nav/container";
import CoverCard from "../../../common/CoverCard/container";
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
          to="/reading"
          style={{ textDecoration: "none", maxWidth: "fit-content" }}
        >
          <Header>Читаю</Header>
        </Link>
        <ListWrapper>
          {books &&
            books.map(
              (item) =>
                item.category === "Читаю" && (
                  <CardWrapper key={item.name}>
                    <CoverCard
                      series={item.series}
                      category={item.category}
                      cover={item.cover}
                      progressPercent={item.progressPercent}
                      progressPages={item.progressPages}
                      releaseDate={item.releaseDate}
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
          <Header>Буду читать</Header>
        </Link>
        <ListWrapper>
          {books &&
            books.map(
              (item) =>
                item.category === "Буду читать" && (
                  <CardWrapper key={item.name}>
                    <CoverCard
                      series={item.series}
                      category={item.category}
                      cover={item.cover}
                      progressPercent={item.progressPercent}
                      progressPages={item.progressPages}
                      releaseDate={item.releaseDate}
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
          <Header>Жду выхода</Header>
        </Link>
        <ListWrapper>
          {books &&
            books.map(
              (item) =>
                item.category === "Жду выхода" && (
                  <CardWrapper key={item.name}>
                    <CoverCard
                      series={item.series}
                      category={item.category}
                      cover={item.cover}
                      progressPercent={item.progressPercent}
                      progressPages={item.progressPages}
                      releaseDate={item.releaseDate}
                    />
                    <NameWrapper>{item.name}</NameWrapper>
                    <AuthorWrapper>{item.author}</AuthorWrapper>
                  </CardWrapper>
                )
            )}
        </ListWrapper>
        <Link
          to="/was-read"
          style={{ textDecoration: "none", maxWidth: "fit-content" }}
        >
          <Header>Прочитано</Header>
        </Link>
        <ListWrapper>
          {books &&
            books.map(
              (item) =>
                item.category === "Прочитано" && (
                  <CardWrapper key={item.name}>
                    <CoverCard
                      series={item.series}
                      category={item.category}
                      cover={item.cover}
                      progressPercent={item.progressPercent}
                      progressPages={item.progressPages}
                      releaseDate={item.releaseDate}
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

Home.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      author: PropTypes.string,
      releaseDate: PropTypes.string,
      progressPercent: PropTypes.string,
      progressPages: PropTypes.string,
      series: PropTypes.string,
      category: PropTypes.string,
    })
  ),
};
