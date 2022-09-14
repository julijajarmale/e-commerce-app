import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
       <>
      <div className="container header">
        <div className="row">
          <div className="col-12">
            <nav className="nav">
              <NavLink
                to="/women"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "crimson",
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
                        color: "crimson",
                      }
                    : null
                }
              >
                MEN
              </NavLink>
              <NavLink
                to="/kids"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "crimson",
                      }
                    : null
                }
              >
                KIDS
              </NavLink>
              <NavLink
                to="/blog"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "crimson",
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
                        color: "crimson",
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
                        color: "crimson",
                      }
                    : null
                }
              >
                HOME
              </NavLink>
              
            </nav>
          </div>
        </div>
      </div>
    </>

  )
}

export default Navbar
