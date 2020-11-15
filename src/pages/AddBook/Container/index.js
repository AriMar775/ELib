import React, { useState, useEffect } from "react";
import { change } from "redux-form";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AddBook from "../component";
import { addBook, addSeries, addCollection } from "../../../redux/actions";
import {
  getFormSeries,
  getFormCollection,
  getFormCover,
  getFormCategory,
} from "../../../redux/selectors";

const AddBookContainer = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();

  const coverValue = useSelector(getFormCover);
  const seriesValue = useSelector(getFormSeries);
  const collectionValue = useSelector(getFormCollection);
  const categoryValue = useSelector(getFormCategory);

  const [isShowSeries, setIsShowSeries] = useState(false);
  const [isShowCollection, setIsShowCollection] = useState(false);
  const [isShowFinishDate, setIsShowFinishDate] = useState(false);
  const [isShowProgress, setIsShowProgress] = useState(false);
  const [isProgressInPercent, setIsProgressInPercent] = useState(true);

  useEffect(() => {
    if (categoryValue === "Прочитано") {
      dispatch(change("AddBookForm", "progressPercent", ""));
      dispatch(change("AddBookForm", "progressPages", ""));
      setIsShowFinishDate(true);
      setIsShowProgress(false);
    } else if (categoryValue === "Читаю") {
      dispatch(change("AddBookForm", "finishDate", ""));
      setIsShowProgress(true);
      setIsShowFinishDate(false);
    } else {
      dispatch(change("AddBookForm", "progressPercent", ""));
      dispatch(change("AddBookForm", "progressPages", ""));
      dispatch(change("AddBookForm", "finishDate", ""));
      setIsShowFinishDate(false);
      setIsShowProgress(false);
    }
  }, [categoryValue, dispatch]);

  const handleSubmit = (values) => {
    dispatch(addBook(values));
    if (values.series != null) dispatch(addSeries(values.series));
    if (values.collection != null) dispatch(addCollection(values.collection));
    history.push(`/book/`);
  };

  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  const handleAddSeriesBtn = () => {
    if (isShowSeries) {
      dispatch(change("AddBookForm", "series", ""));
      setIsShowSeries(!isShowSeries);
    } else {
      dispatch(change("AddBookForm", "series", ""));
      setIsShowSeries(!isShowSeries);
    }
  };

  const handleAddCollectionBtn = () => {
    if (isShowCollection === true) {
      dispatch(change("AddBookForm", "collection", ""));
      setIsShowCollection(!isShowCollection);
    } else {
      dispatch(change("AddBookForm", "collection", ""));
      setIsShowCollection(!isShowCollection);
    }
  };

  const handleToggle = () => {
    setIsProgressInPercent(!isProgressInPercent);
    dispatch(change("AddBookForm", "progressPages", ""));
    dispatch(change("AddBookForm", "progressPercent", ""));
  };

  return (
    <AddBook
      back={back}
      onSubmit={handleSubmit}
      handleAddSeriesBtn={handleAddSeriesBtn}
      handleAddCollectionBtn={handleAddCollectionBtn}
      isShowSeries={isShowSeries}
      isShowCollection={isShowCollection}
      location={location}
      seriesValue={seriesValue}
      collectionValue={collectionValue}
      coverValue={coverValue}
      isShowFinishDate={isShowFinishDate}
      isShowProgress={isShowProgress}
      isProgressInPercent={isProgressInPercent}
      handleToggle={handleToggle}
    />
  );
};

export default AddBookContainer;
