import React, { useState, useEffect } from 'react';
import Footer from './Component/Footer';
import './Component/Footer.css';
import Nav from './Component/Nav';
import './Component/Nav.css';
import Hero from './Component/Hero';
import './Component/Hero.css';
import Login from './Component/Login';
import './Component/Login.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://flipkartbackenddata.onrender.com/data');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Initially show all products
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.product_category_tree.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Nav setShowLogin={setShowLogin} handleSearch={handleSearch} />
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Hero products={filteredProducts} />
      <Footer />
    </div>
  );
}
