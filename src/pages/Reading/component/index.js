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

const Reading = ({ books, collections }) => {
  return (
    <Nav>
      <ContentWrapper>
        <Header>Без коллекции</Header>
        <ListWrapper>
          {books &&
            books.map(
              (book) =>
                book.category === "Читаю" &&
                book.collection === undefined && (
                  <CardWrapper key={book.name}>
                    <CoverCard
                      series={book.series}
                      category={book.category}
                      cover={book.cover}
                      progressPercent={book.progressPercent}
                      progressPages={book.progressPages}
                      releaseDate={book.releaseDate}
                    />
                    <NameWrapper>{book.name}</NameWrapper>
                    <AuthorWrapper>{book.author}</AuthorWrapper>
                  </CardWrapper>
                )
            )}
        </ListWrapper>

        {collections &&
          collections.map((collection) => (
            <Header key={collection}>{collection}</Header>
          ))}
      </ContentWrapper>
    </Nav>
  );
};

export default Reading;

Reading.propTypes = {
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
  collections: PropTypes.arrayOf(PropTypes.string),
};
