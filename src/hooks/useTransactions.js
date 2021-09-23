import { useEffect, useState } from 'react';
import { getTransactionsRequest } from '../../api/transactionsApi';

const MESSAGES = {
  ok: 'OK',
  notOk: 'NOTOK'
};

const useTransactions = providedAddress => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState({});

  const getTransactions = address => {
    getTransactionsRequest(address)
      .then(res => {
        const data = res.data;
        if (Array.isArray(data.result) && data.result.length === 0) {
          setError({ noResult: data.message });
          return;
        } else if (data.message === MESSAGES.notOk) {
          setError({ invalidAddress: data.result });
          return;
        }
        setTransactions(data.result);
        setError({});
      })
      .catch(error => {
        setError(error.response.message);
      });
  };

  useEffect(() => {
    getTransactions(providedAddress);
  }, []);

  return { transactions, error, getTransactions };
};

export default useTransactions;
