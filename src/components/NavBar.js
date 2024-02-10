// NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeClassName="active">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/actors" activeClassName="active">
            Actors
          </NavLink>
        </li>
        <li>
          <NavLink to="/directors" activeClassName="active">
            Directors
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
