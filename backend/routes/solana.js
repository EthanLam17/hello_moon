import express from 'express';
import * as solanaWeb3 from '@solana/web3.js';
import axios from 'axios';

let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed')

const router = express.Router();

router.get('/', async (_req, res) => {
  await connection.getLargestAccounts()
  .then(accounts => res.json(accounts.value))
})

router.get('/usd', async(_req, res) => {
  await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=c92cae25-9f0b-4cec-85ac-1613bb738fe8&slug=solana')
  .then(data => res.json(data.data.data['5426'].quote.USD.price))
  // .then(data => res.json(data.data))
})



export const accounts = router;