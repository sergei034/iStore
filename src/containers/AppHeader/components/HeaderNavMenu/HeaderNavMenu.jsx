import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { IoCartOutline } from 'react-icons/io5';
import { RiAccountCircleLine } from 'react-icons/ri';

import { APP_TITLE, NAVBAR_CATEGORIES } from '../../constants';
import './HeaderNavMenu.css';

const HeaderNavMenu = ({ showSearchIcon, showSearchBar, setShowSearchBar }) => (
  <Navbar className="main-navbar" bg="dark" variant="dark" >
    <Container>
      <div className="main-navbar-container">
        <div>
          <Navbar.Brand as={Link} to="/" className="h-100 mr-auto">{APP_TITLE}</Navbar.Brand>
        </div>
        <div>
          <Nav>
            <Nav.Link as={Link} to="/products/mac" className="nav-item">{NAVBAR_CATEGORIES.mac}</Nav.Link>
            <Nav.Link as={Link} to="/products/iphone" className="nav-item ml-5">{NAVBAR_CATEGORIES.iphone}</Nav.Link>
            <Nav.Link as={Link} to="/products/ipad" className="nav-item ml-5">{NAVBAR_CATEGORIES.ipad}</Nav.Link>
            <Nav.Link as={Link} to="/products/apple-watch" className="nav-item ml-5">{NAVBAR_CATEGORIES.watch}</Nav.Link>
          </Nav>
        </div>
        <div>
          <Nav>
            <Nav.Link 
              className={`nav-item ${!showSearchIcon && 'invisible'}`} 
              onClick={() => setShowSearchBar(!showSearchBar)} 
            >
              <AiOutlineSearch size="2em"/>
            </Nav.Link>
            <Nav.Link as={Link} to="/wishlist" className="nav-item ml-3">
              <AiOutlineHeart size="2em"/>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-item ml-3">
              <IoCartOutline size="2em"/>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </Container>
  </Navbar>
);

HeaderNavMenu.propTypes = {
  showSearchIcon: PropTypes.bool.isRequired,
  showSearchBar: PropTypes.bool.isRequired,
  setShowSearchBar: PropTypes.func.isRequired,
};

export default HeaderNavMenu;
