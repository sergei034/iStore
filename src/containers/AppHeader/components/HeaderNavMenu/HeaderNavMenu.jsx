import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { IoCartOutline, IoLogInOutline, IoLogOutOutline } from 'react-icons/io5';

import { APP_TITLE, NAVBAR_CATEGORIES } from '../../constants';
import './HeaderNavMenu.css';

const HeaderNavMenu = ({ 
    isLoggedIn, 
    logoutRequest,
    showSearchIcon, 
    showSearchBar, 
    setShowSearchBar, 
    showAuthModal 
  }) => (
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
            {
              isLoggedIn && (
                <Nav.Link as={Link} to="/wishlist" className="nav-item ml-3">
                  <AiOutlineHeart size="2em"/>
                </Nav.Link>
              )
            }
            {
              isLoggedIn && (
                <Nav.Link as={Link} to="/cart" className="nav-item ml-3">
                  <IoCartOutline size="2em"/>
                </Nav.Link>
              )
            }
            <Nav.Link className="nav-item ml-3">
              {
                isLoggedIn
                ? <IoLogOutOutline size="2em" onClick={logoutRequest} />
                : <IoLogInOutline size="2em" onClick={showAuthModal} />
              }
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </Container>
  </Navbar>
);

HeaderNavMenu.propTypes = {
  isLoggedIn: PropTypes.bool,
  showSearchIcon: PropTypes.bool.isRequired,
  showSearchBar: PropTypes.bool.isRequired,
  logoutRequest: PropTypes.func.isRequired,
  setShowSearchBar: PropTypes.func.isRequired,
  showAuthModal: PropTypes.func.isRequired,
};

HeaderNavMenu.defaultProps = {
  isLoggedIn: false,
};

export default HeaderNavMenu;
