import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaHome } from "react-icons/fa";
import styled from "styled-components";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        {/*navbar, sidebar, cart, footer */}
        {/* hello from tech store */}
        {/* <FaHome /> */}
        {/* <Button large>hello styled-components</Button> */}
        <Navbar />
        <Sidebar />
        <SideCart />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/product/:id" exact component={SingleProduct} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

// const color = "#f15025";
// const Button = styled.button`
//   color: white;
//   background: ${color};
//   font-size: ${props => (props.large ? "3rem" : "1rem")};
// `;
