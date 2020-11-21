import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button, Badge, Nav, Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './HeaderNavMenu.css';

const HeaderNavMenu = () => (
    <Navbar bg="dark" variant="dark" >
      <div className="container">
        <Navbar.Brand as={Link} to="/products" className="h-100 nav-title">iStore</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/products" className="nav-item">Products</Nav.Link>
          <Nav.Link as={Link} to="/cart" className="nav-item pl-4">My Cart</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );

export default HeaderNavMenu;
