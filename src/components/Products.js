import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  checkid = (product) => {
    console.log("this is the id, " + product);
    if (product === "dress1") {
      window.open("https://www.google.com/", "_blank");
    } else if (product === "dress2") {
      window.open("https://www.yahoo.com/", "_blank");
    } else {
      window.open("https://www.github.com/", "_blank");
    }
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  {/* <a
                    href={"/" + product._id}
                    // onClick={() => this.openModal(product)}
                    onClick={() => {
                      // if ("dress1") {
                      //   window.open("https://www.github.com/", "_blank");
                      // } else if ("dress2") {
                      //   window.open("https://www.google.com/", "_blank");
                      // }
                    }}
                  > */}
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                  {/* </a> */}
                  <div className="product-price">
                    <button
                      onClick={() => this.checkid(product._id)}
                      className="button primary"
                    >
                      Visit Project{" "}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.title}></img>
                <img src={product.image} alt={product.title}></img>
                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                  <p>
                    Avaiable Sizes:{" "}
                    {product.availableSizes.map((x) => (
                      <span>
                        {" "}
                        <button className="button">{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
