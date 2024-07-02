import React, { useState } from 'react';
import Myntralogo from '../Component/Myntralogo.jpg'; 
import wishpic from '../Component/wishlist.jpg';
import bagpic from '../Component/bag.jpg';
import searchpic from '../Component/search.jpg';
import './Nav.css';

function Nav({ setShowLogin, handleSearch }) {
  const [query, setQuery] = useState('');

  const handleButtonClick = () => {
    handleSearch(query);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div id="mai">
      <div id="logo">
        <img src={Myntralogo} alt="Myntra Logo" />
      </div>
      <div id="list">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>HOME & LIVING</li>
        <li>BEAUTY</li>
      </div>
      <div id="search">
        <img className="searchlogo" src={searchpic} alt="" />
        <input
          id="input"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="searchButton" onClick={handleButtonClick}>Search</button>
      </div>
      <div id="profile">
        <li><img className="pro" src={wishpic} alt="wishlist" /></li>
        <li><img className="pro" src={bagpic} alt="bag pic" /></li>
        <li><button className="loginButton" onClick={handleLoginClick}>Login</button></li>
      </div>
    </div>
  );
}

export default Nav;

