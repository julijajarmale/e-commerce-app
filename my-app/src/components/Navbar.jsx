import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Top from "./Top";
import Announcement from "./Announcement";

const Navbar = () => {
  return (
    <>
      <Top />
      <div className="container header">
        <div className="row">
          <nav className="nav">
            <div className="logo-col">Shopit!</div>
            <div className="center-col">
              <input type="search" placeholder="Search for items and brands" />
              <SearchIcon />
            </div>
            <div className="pages">
              <NavLink
                to="/women"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "white",
                      }
                    : null
                }
              >
                WOMEN
              </NavLink>
              <NavLink
                to="/men"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "white",
                      }
                    : null
                }
              >
                MEN
              </NavLink>

              <NavLink
                to="/blog"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "white",
                      }
                    : null
                }
              >
                BLOG
              </NavLink>
              <NavLink
                to="/sale"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "white",
                      }
                    : null
                }
              >
                SALE
              </NavLink>
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "white",
                      }
                    : null
                }
              >
                HOME
              </NavLink>
            </div>
            <ShoppingCartIcon className="cart" />
          </nav>
        </div>
      </div>
      <Announcement />
    </>
  );
};

export default Navbar;
