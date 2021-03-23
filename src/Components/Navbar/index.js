import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./Navbar";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">KAMPUS</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
