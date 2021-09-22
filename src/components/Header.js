import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="Header">
        <div className="sub-header">
          <div className="Name">
            <Link to="/">Rayyes-React-Movies</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Favourites</Link>
            </li>
            <li>
              <Link to="/Search" className="btn btn-main">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
