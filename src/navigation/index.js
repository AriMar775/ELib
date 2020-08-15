import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Container";
import Book from "../pages/Book/Container";
import AddBook from "../pages/AddBook/Container";
import SelectSeriesModal from "../common/Modals/SelectSeriesModal/Container";
import SelectCollectionModal from "../common/Modals/SelectCollectionModal/Container";

const Routes = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/home" component={Home} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/add-book" component={AddBook} />
        <Route component={NotFound} />
      </Switch>
      {background && (
        <>
          <Route path="/select-series-modal" component={SelectSeriesModal} />
          <Route
            path="/select-collections-modal"
            component={SelectCollectionModal}
          />
        </>
      )}
    </>
  );
};

export default Routes;
