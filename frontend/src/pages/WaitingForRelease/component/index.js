import React from "react";
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

const WaitingForRelease = ({ books }) => {
  return (
    <Nav>
      <ContentWrapper>
        <Header>Жду выхода</Header>
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
      </ContentWrapper>
    </Nav>
  );
};

export default WaitingForRelease;

WaitingForRelease.propTypes = {
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
