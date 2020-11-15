import React from "react";
import moment from "moment";
import "moment/locale/ru";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Book } from "../component";
import { getBook } from "../../../redux/selectors";

const BookContainer = () => {
  moment.locale("ru");
  let location = useLocation();

  const book = useSelector(getBook);

  const handleBlueBtnClick = () => {};

  return (
    <Book
      location={location}
      category={book.category}
      cover={book.cover}
      name={book.name}
      author={book.author}
      releaseDate={moment(book.releaseDate).format("LL")}
      finishDate={moment(book.finishDate).format("LL")}
      bookSize={book.bookSize}
      textSize={book.textSize}
      series={book.series}
      collection={book.collection}
      annotation={book.annotation}
      advantages={book.advantages}
      disadvantages={book.disadvantages}
      comment={book.comment}
      progressPercent={book.progressPercent}
      progressPages={book.progressPages}
      onBlueBtnClick={handleBlueBtnClick}
    />
  );
};

export default BookContainer;
