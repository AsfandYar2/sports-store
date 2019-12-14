import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "../Products/Products";
import Category from "../category/Category";
import SearchBar from "../Products/SearchBar";
import Cart from "./Cart";

const Home = () => {
  return (
    <Switch>
      <Route path="/Cart">
        <Cart />
      </Route>
      <Route path="/products/:category">
        <div className="row">
          <div className="col s3">
            <Category />
          </div>
          <div className="col-md-9">
            <div className="container">
              <SearchBar />
            </div>
            <Products />
          </div>
        </div>
      </Route>
      <Route path="/">
        <div className="row">
          <div className="col s3">
            <Category />
          </div>
          <div className="col-md-9">
            <div className="container">
              <SearchBar />
            </div>
            <Products />
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default Home;
