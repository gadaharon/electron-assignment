import axios from 'axios';

const apiKey = '5GFWZM7UJX8Y6INU5BM9HM5VBUN426TVE3';

export const getTransactionsRequest = (address) =>
  axios.get(
    `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10000&sort=desc&apikey=${apiKey}`
  );
