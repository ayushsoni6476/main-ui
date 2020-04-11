import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import history from "./history"
export default class Shops extends Component {
  
  render() {
    const {
      id,
      title
    } = this.props.shop;
    return (
      <ShopWrapper>
      <div className="card" >
        <div className="img-container p-5" 
          onClick={() => console.log("you clicked on image container")}
        >
         <Link to="/details">
              
            </Link>
          <button 
                  className="cart-btn"
                  onClick={() => console.log("you clicked")}
                >Click me 
                    </button>
        </div>
      </div>
    </ShopWrapper>
    );
    }
}
const ShopWrapper = styled.section``;