import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

import HeaderNavMenu from './components/HeaderNavMenu';
import SearchBar from '../../components/SearchBar/SearchBar';
import { setSearchItem as setSearchItemAction } from '../ProductList/actions';
import { 
  logoutRequest as logoutRequestAction,
  showAuthModal as showAuthModalAction,
} from '../AuthModal/actions';
import { showSearchIcon } from './AppHeader.helpers';

const AppHeader = ({ isLoggedIn, logoutRequest, searchItem, setSearchItem, showAuthModal }) => {

  const [showSearchBar, setShowSearchBar] = useState(false);
  const { pathname } = useLocation();

  const closeSearchBarHandler = () => {
    setShowSearchBar(false);
    setSearchItem('');
  };

  return (
    <div className="sticky-top">
      <HeaderNavMenu 
        isLoggedIn={isLoggedIn}
        logoutRequest={logoutRequest}
        showSearchIcon={showSearchIcon(pathname)}
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar} 
        showAuthModal={showAuthModal}
      />
      {showSearchBar && showSearchIcon(pathname) && 
        <SearchBar 
          searchItem={searchItem} 
          setSearchItem={setSearchItem} 
          closeHandler={closeSearchBarHandler}
        />}
    </div>
)};

const mapStateToProps = (state) => ({
  searchItem: state.products.searchItem,
  isLoggedIn: state.auth.token !== null,
});

const mapDispatchToProps = {
  logoutRequest: logoutRequestAction,
  setSearchItem: setSearchItemAction,
  showAuthModal: showAuthModalAction,
};

AppHeader.propTypes = {
  searchItem: PropTypes.string.isRequired, 
  isLoggedIn: PropTypes.bool, 
  logoutRequest: PropTypes.func.isRequired, 
  setSearchItem: PropTypes.func.isRequired,
  showAuthModal: PropTypes.func.isRequired,
};

AppHeader.defaultProps = {
  isLoggedIn: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
