import React, { Component } from "react";
import { storeShops, detailshop } from "./data1";
const ShopContext = React.createContext();
class ShopProvider extends Component {
  state = {
    shops: [],
    detailshop: detailshop
  };
  
  render() {
    return (
      <ShopContext.Provider value="hello from  shop context">
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}
const ShopConsumer = ShopContext.Consumer;

export { ShopProvider, ShopConsumer };
