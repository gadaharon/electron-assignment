import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TransactionsList from './TransactionsList';
import useTransactions from '../hooks/useTransactions';

const App = () => {
  const { transactions, error, getTransactions } = useTransactions('0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a');

  return (
    <div className='app'>
      <div className='container'>
        <h1>Transactions view app</h1>
        <SearchBar onClick={getTransactions} />
        {error.invalidAddress && <div className="error-message">{error.invalidAddress}</div>}
        {error.noResult ? <div className="error-message">{error.noResult}</div> : <TransactionsList transactions={transactions} />}
      </div>
    </div>
  );
};

export default App;
