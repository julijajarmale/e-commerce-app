import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1 className="title">Your Bag</h1>
        <div className="top1">
          <button className="top-button">CONTINUE SHOPPING</button>
          <div className="toptext">Shopping bag (2)</div>
          <div className="toptext">Your Wishlist (3)</div>
          <button className="top-button2">CHECKOUT</button>
        </div>

        <div className="bottom">
          <div className="info">
            <div className="product">
              <div className="product-detail">
                <img></img>
                <p>Product name</p>
                <p>Product ID</p>
                <p>Size: 38</p>
              </div>
              <div className="price-detail">
              <p>Price: 499 EUR</p>
              </div>
            </div>
          </div>
          <div className="summary">summary</div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
