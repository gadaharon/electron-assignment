import React, { useState } from 'react';

const SearchBar = ({ onClick }) => {
  const [address, setAddress] = useState('');

  const onChange = ({ target }) => setAddress(target.value);
  const searchTransactions = () => onClick(address);

  return (
    <div className="searchbar-container">
      <input onChange={onChange} className="search-input" placeholder="Search by address" />
      <div onClick={searchTransactions} className="search-button"><span>Search</span></div>
    </div>
  )
}

export default SearchBar;