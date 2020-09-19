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

const WasRead = ({ books }) => {
  return (
    <Nav>
      <ContentWrapper>
        <Header>Прочитано</Header>
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

export default WasRead;
