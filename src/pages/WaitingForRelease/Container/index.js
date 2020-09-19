import React from "react";
import { useSelector } from "react-redux";

import WaitingForRelease from "../Component";
import { getBooks } from "../../../redux/selectors";

const WaitingForReleaseContainer = () => {
  const books = useSelector(getBooks);

  return <WaitingForRelease books={books} />;
};

export default WaitingForReleaseContainer;
