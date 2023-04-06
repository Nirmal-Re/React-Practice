import React, { Component } from "react";

const Navbar = ({ totalCounter }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge pill">{totalCounter}</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
