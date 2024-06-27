import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  
  // const options = [
  //   'one', 'two', 'three'
  // ];
  // const defaultOption = options[0];

  useEffect(() => {});
  const AddCartClick = () => {
    setCartCount((count) => count + 1);
  };
  
  return (
    <div className="header">
      <div className="header-content">
        <div className="site-logo">
          <a href="/"><img className="logo-img" src="tgslogo.png" /></a>
        </div>
        
        <ul className="nav-dropdowns">
          <li>
            <a>TRAINING COURSES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-compact-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
              />
            </svg>
            </a>
            
          </li>
          <li>
            RESOURCES
            <a><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-compact-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
              />
            </svg></a>
            
          </li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
        
        <div className="searchbar-container">
          <div className="nav-search-button">
            <input type="text" placeholder="Course Search.." />
            <button type="submit" className="btn btn-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                
                className="bi bi-search"
                viewBox="0 0 14 14"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
          <ul className="h-right-links float-right clear">
            <li className="phone_no_container">
              <a href="tel:887996655" className="btn-head shop-phone">
                <i className="fa fa-phone"></i>
              </a>
              <div className="phone_no">
                <a href="tel:8879876787">Call: 9989976897 </a>
                <a href="tel:+44 (0)1344938011">
                  From overseas: +44 (0)9008699755
                </a>
                <a href="/contact-us">Contact Us</a>
              </div>
            </li>
            <li>
              <a href="/cart" rel="noopener" className="btn-head shop-cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="cart-count">0</span>
              </a>
            </li>
            <li className="h-signin-link desktop-only">
              <a
                className="btn-head"
                href="https://www.tsg-training.co.uk/customer-area/"
                title="Sign In"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
