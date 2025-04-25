import express from 'express';
import router from './Routers/router.js';

import cors from 'cors'
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/project',router)

export default app; 