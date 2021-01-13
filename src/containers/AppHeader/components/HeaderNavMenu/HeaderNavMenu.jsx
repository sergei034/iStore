import React from 'react';
import { Link } from 'react-router-dom'; 
import { Nav, Navbar } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoCartOutline } from 'react-icons/io5';
import { RiAccountCircleLine } from 'react-icons/ri';

import './HeaderNavMenu.css';

const HeaderNavMenu = () => (
  <Navbar bg="dark" variant="dark" >
    <div className="container">
      <Navbar.Brand as={Link} to="/products" className="h-100 nav-title mr-auto">iStore</Navbar.Brand>
      <Nav className="m-auto">
        <Nav.Link as={Link} to="/mac" className="nav-item">Mac</Nav.Link>
        <Nav.Link as={Link} to="/iphone" className="nav-item ml-5">iPhone</Nav.Link>
        <Nav.Link as={Link} to="/ipad" className="nav-item ml-5">iPad</Nav.Link>
        <Nav.Link as={Link} to="/apple-watch" className="nav-item ml-5">Apple Watch</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/account" className="nav-item">
          <RiAccountCircleLine size="2em"/>
        </Nav.Link>
        <Nav.Link as={Link} to="/wishlist" className="nav-item ml-3">
          <AiOutlineHeart size="2em"/>
        </Nav.Link>
        <Nav.Link as={Link} to="/cart" className="nav-item ml-3">
          <IoCartOutline size="2em"/>
        </Nav.Link>
      </Nav>
    </div>
  </Navbar>
);

export default HeaderNavMenu;
