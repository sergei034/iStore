import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';

import HeaderNavMenu from './components/HeaderNavMenu';
import SearchBar from '../../components/SearchBar/SearchBar';
import { setSearchItem as setSearchItemAction } from '../ProductList/actions';
import { showSearchIcon } from './AppHeader.helpers';

// TODO: Use Products reducer or make its own
const AppHeader = ({ searchItem, setSearchItem }) => {

  const [showSearchBar, setShowSearchBar] = useState(false);
  const { pathname } = useLocation();

  const closeSearchBarHandler = () => {
    setShowSearchBar(false);
    setSearchItem('');
  };

  return (
    <div className="sticky-top">
      <HeaderNavMenu 
        showSearchIcon={showSearchIcon(pathname)}
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar} 
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
});

const mapDispatchToProps = {
  setSearchItem: setSearchItemAction,
};

AppHeader.propTypes = {
  searchItem: PropTypes.string.isRequired, 
  setSearchItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
