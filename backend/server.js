import app from './src/app.js' 
import dotenv from 'dotenv'
dotenv.config();


import connect from '../backend/src/db/db.js'

connect();

app.listen(process.env.PORT , ()=>{
    console.log("server start in " + process.env.PORT);
})