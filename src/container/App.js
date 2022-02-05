import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../components/Pages/Home";
import Blog from "../components/Pages/Blog";
import Contact from "../components/Pages/Contact";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import LightSpeed from "react-reveal/LightSpeed";
// import Products from "../components/Products";
// import data from "../data.json";

class App extends Component {
  state = {
    headerName: "Welcome to the site",
    jobtitle: "Software Engineer",
    gitLink: "https://github.com/davebecoding",
    twitterLink: "https://twitter.com/",
    linkedInLink: "https://www.linkedin.com/",
  };

  // // ***********************

  // constructor() {
  //   super();
  //   this.state = {
  //     products: data.products,
  //     cartItems: localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : [],
  //     size: "",
  //     sort: "",
  //   };
  // }

  // createOrder = (order) => {
  //   alert("Need to save order for " + order.name);
  // };
  // removeFromCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({
  //     cartItems: cartItems.filter((x) => x._id !== product._id),
  //   });
  //   localStorage.setItem(
  //     "cartItems",
  //     JSON.stringify(cartItems.filter((x) => x._id !== product._id))
  //   );
  // };
  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if (item._id === product._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems });
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };
  // sortProducts = (event) => {
  //   // impl
  //   const sort = event.target.value;
  //   console.log(event.target.value);
  //   this.setState((state) => ({
  //     sort: sort,
  //     products: this.state.products
  //       .slice()
  //       .sort((a, b) =>
  //         sort === "lowest"
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : sort === "highest"
  //           ? a.price < b.price
  //             ? 1
  //             : -1
  //           : a._id < b._id
  //           ? 1
  //           : -1
  //       ),
  //   }));
  // };
  // filterProducts = (event) => {
  //   // impl
  //   console.log(event.target.value);
  //   if (event.target.value === "") {
  //     this.setState({ size: event.target.value, products: data.products });
  //   } else {
  //     this.setState({
  //       size: event.target.value,
  //       products: data.products.filter(
  //         (product) => product.availableSizes.indexOf(event.target.value) >= 0
  //       ),
  //     });
  //   }
  // };

  // ************************
  render() {
    const { gitLink, twitterLink, linkedInLink } = this.state;
    return (
      <HashRouter>
        <div>
          {/* <LightSpeed right><h1>{headerName}</h1></LightSpeed> */}
          <LightSpeed right>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          </LightSpeed>
          {/* <Products
              products={this.state.products}
              addToCart={this.addToCart}
            ></Products> */}
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            
          </div>
          <LightSpeed right>
            <ul className="footer">
              <li>
                <a href={gitLink} rel="noopener noreferrer" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href={twitterLink} rel="noopener noreferrer" target="_blank">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href={linkedInLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <NavLink to="/linkedin"></NavLink>
                {/*  */}
              </li>
            </ul>
          </LightSpeed>
        </div>
      </HashRouter>
    );
  }
}

export default App;
