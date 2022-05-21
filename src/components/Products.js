import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import testimg from './images/test-Crypto.png';
import ecom from './images/ecom.png';
import finder from './images/finder.png';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      images: [finder, ecom, testimg],
    };
  }

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  };

  checkid = (product) => {
    if (product === 'dress1') {
      window.open('https://finder-gh-app.herokuapp.com/', '_blank');
    } else if (product === 'dress2') {
      window.open('https://cart-ecom.herokuapp.com/', '_blank');
    } else {
      window.open('https://cryptosearch-app.herokuapp.com/', '_blank');
    }
  };

  checkimage = (product) => {
    if (product === 'dress1') {
      return finder;
    } else if (product === 'dress2') {
      return ecom;
    } else {
      return testimg;
    }
  }; //check image to display manually

  render() {
    return (
      <div>
        <Fade bottom cascade>
          <ul className='products'>
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div className='product'>
                  <img
                    src={this.checkimage(product._id)}
                    alt={product.title}
                  ></img>
                  <p>{product.title}</p>
                  <div className='product-price'>
                    <button
                      onClick={() => this.checkid(product._id)}
                      className='button primary'
                    >
                      Visit Project{' '}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
    );
  }
}

// npm run deploy
