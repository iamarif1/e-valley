import React from 'react';
import { Button, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from 'react-router-dom';
import'./Header.css'

const Header = () => {
    return (
      <div className="header"> 
        <Navbar>
          <NavbarBrand>E-Valley</NavbarBrand>
          <Link to="/home">Home</Link>
          <Link to="/order">Orders</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/">Deals</Link>
          <Link to="/login">
            <Button variant="success">Log In</Button>
          </Link>
        </Navbar>
      </div>
    );
};

export default Header;