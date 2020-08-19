import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../../common/Nav/Container";
import Card from "../../../common/Card";
import {
  HWrapper,
  VWrapper,
  CardWrapper,
  ImageWrapper,
  SeriesWrapper,
  Title,
  BlueTitle,
  SubTitle,
  TextAbout,
  Text,
  PlusWrapper,
  MinusWrapper,
  CommentWrapper,
  AdvWrapper,
  BtnWrapper,
  BtnBg,
  EditIcon,
  DeleteIcon,
  ReadWrapper,
  PercentReadWrapper,
  PagesReadWrapper,
  NumberWrapper,
  EditNumberIcon,
  BlueBtnWrapper,
} from "./styles";

export const Book = ({
  category,
  cover,
  name,
  author,
  releaseDate,
  finishDate,
  bookSize,
  textSize,
  series,
  collection,
  annotation,
  advantages,
  disadvantages,
  comment,
  location,
  progressPercent,
  progressPages,
  onBlueBtnClick,
  ...props
}) => {
  return (
    <Nav>
      <BtnWrapper>
        <BtnBg>
          <EditIcon />
        </BtnBg>
        <BtnBg>
          <DeleteIcon />
        </BtnBg>
      </BtnWrapper>
      <HWrapper>
        {cover && (
          <CardWrapper>
            <Card width="238px" minHeight="312px">
              <Link
                to={{
                  pathname: "/series-items-modal",
                  state: { background: location },
                }}
                style={{ textDecoration: "none" }}
              >
                {series && <SeriesWrapper>{series} (N/N)</SeriesWrapper>}
              </Link>
              <ImageWrapper src={cover} />
              {category === "Читаю" && (
                <ReadWrapper>
                  <NumberWrapper>
                    {progressPercent && (
                      <PercentReadWrapper>
                        {progressPercent} %
                      </PercentReadWrapper>
                    )}
                    {progressPages && (
                      <PagesReadWrapper>
                        {progressPages} / 1152 стр.
                      </PagesReadWrapper>
                    )}
                  </NumberWrapper>
                  <EditNumberIcon />
                </ReadWrapper>
              )}
              {category === "Жду выхода" && releaseDate && (
                <PagesReadWrapper>{releaseDate}</PagesReadWrapper>
              )}
              {category === "Буду читать" && (
                <BlueBtnWrapper onClick={onBlueBtnClick}>
                  Начать читать
                </BlueBtnWrapper>
              )}
            </Card>
          </CardWrapper>
        )}

        <VWrapper>
          {name && <Title>{name}</Title>}
          <HWrapper>
            {author && (
              <>
                <SubTitle>Автор: </SubTitle>
                <TextAbout>{author}</TextAbout>
              </>
            )}
          </HWrapper>
          <HWrapper>
            {releaseDate && (
              <>
                <SubTitle>Дата выхода: </SubTitle>
                <TextAbout>{releaseDate}</TextAbout>
              </>
            )}
          </HWrapper>

          {finishDate && (
            <HWrapper>
              <SubTitle>Дата прочтения: </SubTitle>
              <TextAbout>{finishDate}</TextAbout>
            </HWrapper>
          )}

          {bookSize && (
            <HWrapper>
              <SubTitle>Объем: </SubTitle>
              <TextAbout>{bookSize} стр.</TextAbout>
            </HWrapper>
          )}

          {textSize && (
            <HWrapper>
              <SubTitle>Размер текста: </SubTitle>
              <TextAbout>{textSize}</TextAbout>
            </HWrapper>
          )}

          {collection && (
            <HWrapper>
              <SubTitle>Коллекция: </SubTitle>
              <Link
                to="/collections"
                style={{
                  textDecoration: "none",
                  marginTop: "-3px",
                  color: "#90BAF9",
                }}
              >
                <TextAbout>{collection}</TextAbout>
              </Link>
            </HWrapper>
          )}
          {annotation && <Text>{annotation}</Text>}
        </VWrapper>
      </HWrapper>
      <HWrapper>
        <VWrapper>
          {advantages && (
            <AdvWrapper>
              <PlusWrapper />
              <Text>{advantages}</Text>
            </AdvWrapper>
          )}

          {disadvantages && (
            <AdvWrapper>
              <MinusWrapper />
              <Text>{disadvantages}</Text>
            </AdvWrapper>
          )}
        </VWrapper>

        {comment && (
          <CommentWrapper>
            <BlueTitle>Комментарий</BlueTitle>
            <Text>{comment}</Text>
          </CommentWrapper>
        )}
      </HWrapper>
    </Nav>
  );
};
