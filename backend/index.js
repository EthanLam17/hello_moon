import express from 'express';
// import solanaWeb3 from '@solana/web3.js'
import {accounts} from './routes/solana.js'
import cors from 'cors'

// let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed')


const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/solana', accounts)

// app.get('/', async (req, res) => {
//   let accounts = await connection.getLargestAccounts()
//   res.json(accounts).status(200)
// })

const port = process.env.PORT || 5001; 

app.listen(port, () => console.log(`Server is live on port ${port}`));