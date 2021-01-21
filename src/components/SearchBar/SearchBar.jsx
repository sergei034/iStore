import React from 'react';
import PropTypes from 'prop-types';
import { Container, FormControl } from 'react-bootstrap';

import './SearchBar.css';

const SearchBar = ({ searchItem, setSearchItem, closeHandler }) => (
  <div className="searchbar-container">
    <Container className="d-flex flex-row align-items-center">
      <FormControl
        autoFocus
        size="lg"
        className="searchbar"
        placeholder="Search"
        aria-label="Search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <span type="button" className="close p-3" aria-label="Close" onClick={closeHandler}>
        <span aria-hidden="true">&times;</span>
      </span>
    </Container>
  </div>
);

export default SearchBar;

SearchBar.propTypes = {
  searchItem: PropTypes.string,
  setSearchItem: PropTypes.func.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchItem: '',
};
