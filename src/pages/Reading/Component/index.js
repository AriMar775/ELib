import React from "react";

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
