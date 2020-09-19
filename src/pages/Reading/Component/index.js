import React from "react";

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
                  <CardWrapper>
                    <CoverCard
                      series={book.series}
                      category={book.category}
                      cover={book.cover}
                      progressPercent={book.progressPercent}
                      progressPages={book.progressPages}
                      releaseDate={book.releaseDate}
                      key={book.name}
                    />
                    <NameWrapper>{book.name}</NameWrapper>
                    <AuthorWrapper>{book.author}</AuthorWrapper>
                  </CardWrapper>
                )
            )}
        </ListWrapper>

        {collections &&
          collections.map((collection) => <Header>{collection}</Header>)}
      </ContentWrapper>
    </Nav>
  );
};

export default Reading;
