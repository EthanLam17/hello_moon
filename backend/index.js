import express from 'express';
import {accounts} from './routes/solana.js'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/solana', accounts)

const port = process.env.PORT || 5001; 

app.listen(port, () => console.log(`Server is live on port ${port}`));