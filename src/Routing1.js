import React, { Component } from "react";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "./Login";
import Home from "./Home";
import Form4 from "./Form4";
import CustomerDetails from "./CustomerDetails";
import AddProduct from "./AddProduct";
import ProductList from "./components/ProductList";
import "./styles.css";
import Registration1 from "./Registration1";
//note:code transfered to app.js
export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/AddProduct" exact component={AddProduct} />
          <Route path="/Form4" exact component={Form4} />
          <Route path="/CustomerDetails" exact component={CustomerDetails} />
          <Route exact path="/" component={ProductList} />
          <Route path="/Registration1" exact component={Registration1} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
