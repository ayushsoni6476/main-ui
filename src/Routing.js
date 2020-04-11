import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "./Login";
import Home from "./Home";
//import AddProduct from "./components1/AddProduct";
import Trackorder from "./Trackorder";
import CustomerDetails from "./CustomerDetails";
//import Navbar from "./Navbar";
//import ShopList from "./components/ShopList";
import ProductList from "./components/ProductList";
import AddProduct from "./ShopAccount/AddProduct";
import Shopaccount from "./ShopAccount/Shopaccount";
import Registration1 from "./Registration1";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/ShopAccount/AddProduct" exact component={AddProduct} />
          <Route path="/ShopAccount/Shopaccount" exact component={Shopaccount} />
          <Route path="/CustomerDetails" exact component={CustomerDetails} />
          <Route path="/Trackorder" exact component={Trackorder} />
           <Route exact path="/" component={ProductList} />
          <Route path="/Registration1" exact component={Registration1} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
export default App;
