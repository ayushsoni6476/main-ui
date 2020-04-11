import React, { Component } from "react";
import Shops from "./Shops";
//import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Title from "./Title";
import { storeShops } from "../data1";
import styled from "styled-components";
import { ShopConsumer } from "../contextshop";
//import history from "./history"

export default class ShopList extends Component {
  
  state = {
    shops: storeShops
  };

  render() {
    
    console.log(this.state.Shop);
    return (
      <React.Fragment>
        <ShopWrapper className="py-5">
          <div className="container">
            <Title name="Our" title="Shops" />
            
            <div className="row">
              {this.state.shops.map(shops => {
                return <Shops key={shops.id} shop={shops} />;
              })}
            </div>
          </div>
        </ShopWrapper>
      </React.Fragment>
      
    );
  }
}

const ShopWrapper = styled.section``;