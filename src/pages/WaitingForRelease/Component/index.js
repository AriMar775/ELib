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

export default WaitingForRelease;