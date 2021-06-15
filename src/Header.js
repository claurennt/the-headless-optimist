import React from "react";
import headless_optimist2 from "./headless_optimist2.png";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import BlogPosts from "./BlogPosts";
export default function Header({ blogPosts }) {
  const { tag } = useParams();
  return (
    <>
      <div className="App-header">
        <div className="container container-fluid titleWrapper ">
          <div className=" row ">
            <div class=" col-auto text-end h-25">
              <h1 className=" blogTitle  d-inline">The Headless</h1>{" "}
            </div>

            <div className="wordImageWrapper  text-start col-auto">
              <p className="wordTitle blogTitle">Optimist</p>
              <img
                src={headless_optimist2}
                alt="headless-optimist logo"
                className="headless-logo "
              />
            </div>
            <div className="container container-fluid h-25 w-25">
              <div className=" col ms-auto headerForm">
                <form class="d-flex  ">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className=" row ">
            <div className="col-auto">
              <h5 className="pb-4 subtitle">
                The Most Positive News Blog{" "}
                <span className="separatedText"> on the Web</span>
              </h5>
            </div>
          </div>
        </div>

        <Navbar expand="md" className="navbarContainer">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/home" className="navbarLink">
                home
              </NavLink>
              <NavLink to="/energy" className="navbarLink">
                energy
              </NavLink>
              <NavLink to="/environment" className="navbarLink">
                environment
              </NavLink>
              <NavLink to="/gender" className="navbarLink">
                gender
              </NavLink>
              <NavLink to="/authors" className="navbarLink">
                authors
              </NavLink>
              <NavLink to="/contact" className="navbarLink">
                contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
