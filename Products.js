import React from 'react';
import './Products.css';
import lapimage from './images/lap.png';
import lapimage2 from './images/iphone.jpeg';
import lapimage3 from './images/samsung.jpg';

const Products = () => {
  return (
    <div>
      <h1 className='cll'>Products</h1>
      <div className="products-wrapper">
        <div className="products-container">
          <div className="card">
            <img src={lapimage} alt="Product" className="card-img" />
            <div className="card-content">
              <h2 className="product-title">Product Name : Dell</h2>
              <p className="product-description">Product Price :$700</p>
              <p className="product-description">Product Discount :$20</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="products-container">
          <div className="card">
            <img src={lapimage2} alt="Product" className="card-img" />
            <div className="card-content">
              <h2 className="product-title">Product Name : Iphone</h2>
              <p className="product-description">Product Price :$900</p>
              <p className="product-description">Product Discount :$10</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="products-container">
          <div className="card">
            <img src={lapimage3} alt="Product" className="card-img" />
            <div className="card-content">
              <h2 className="product-title">Product Name : Samsung</h2>
              <p className="product-description">Product Price :$490</p>
              <p className="product-description">Product Discount :$25</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="products-container">
          <div className="card">
            <img src={lapimage} alt="Product" className="card-img" />
            <div className="card-content">
              <h2 className="product-title">Product Name : ASUS</h2>
              <p className="product-description">Product Price :$300</p>
              <p className="product-description">Product Discount :$15</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className='products-wrape'>

        <div className="products-container">
          <div className="card">
            <img src={lapimage} alt="Product" className="card-img" />
            <div className="card-content">
              <h2 className="product-title">Product Name : ROG</h2>
              <p className="product-description">Product Price :$1200</p>
              <p className="product-description">Product Discount :$10</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="products-container">
          <div className="card">
            <img src={lapimage} alt="Product" className="card-img" />
            <div className="card-content">
              <h2 className="product-title">Product Name : MacBook</h2>
              <p className="product-description">Product Price :$1000</p>
              <p className="product-description">Product Discount :$30</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="products-container">
          <div className="card">
            <img src={lapimage} alt="Product" className="card-img" />
            <div className="card-content">
              <h2 className="product-title">Product Name : HP</h2>
              <p className="product-description">Product Price :$570</p>
              <p className="product-description">Product Discount :$20</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="products-container">
          <div className="card">
            <img src={lapimage} alt="Product" className="card-img" />
            <div className="card-content">
              <h2 className="product-title">Product Name : VivoBook</h2>
              <p className="product-description">Product Price :$650</p>
              <p className="product-description">Product Discount :$20</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;