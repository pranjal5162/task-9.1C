import { useState } from 'react'
import './topper.css';
import { FaSearch } from 'react-icons/fa'; // install with: npm install react-icons

function Topper() {
  return (
    <header className="header">
      <div className="logo">DEV@Deakin</div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>

      <div className="nav-links">
        <span className="nav-item">Post</span>
        <span className="nav-item">Login</span>
      </div>
    </header>
  );
}

export default Topper;
