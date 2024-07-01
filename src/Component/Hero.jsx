import React from 'react';
import './Hero.css';
import image from '../Component/asset 1.png';

function Hero({ products }) {
  const limitedProducts = products.slice(0, 40);

  return (
    <div id="hero">
      <div className="slide">
        <img id="picture" src={image} alt="Main" />
      </div>
      <div id="photomain">
        {limitedProducts.map(product => (
          <div key={product._id} className="photos">
            <img
              src={JSON.parse(product.image)[0]}
              alt={product.product_name}
            />
            <h2>{product.product_name}</h2>
            <p>Category: {product.product_category_tree}</p>
            <p>Retail Price: ₹{product.retail_price}</p>
            <p>Discounted Price: ₹{product.discounted_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
