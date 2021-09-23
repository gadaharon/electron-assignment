import React from 'react';

const TransactionsList = ({ transactions = [] }) => {
  return (
    <div>
      {transactions.map(transaction => (
        <div key={transaction.hash} className="card">
          <div className="item">
            <label>Timestamp:</label> <span>{transaction.timeStamp}</span>
          </div>
          <div className="item">
            <label>From:</label> <span>{transaction.from}</span>
          </div>
          <div className="item">
            <label>To:</label> <span>{transaction.to}</span>
          </div>
          <div className="item">
            <label>Value:</label> <span>{transaction.value}</span>
          </div>
          <div className="item">
            <label>Confirmations:</label> <span>{transaction.confirmations}</span>
          </div>
          <div className="item">
            <label>Hahs:</label> <span>{transaction.hash}</span>
          </div>
        </div>
      ))}
    </div>
  );
};


export default TransactionsList;
