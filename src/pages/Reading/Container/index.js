import React from "react";
import { useSelector } from "react-redux";

import Reading from "../Component";
import { getBooks, getCollections } from "../../../redux/selectors";

const ReadingContainer = () => {
  const books = useSelector(getBooks);
  const collections = useSelector(getCollections);

  return <Reading books={books} collections={collections} />;
};

export default ReadingContainer;
