import app from './src/app.js' 
import connect from '../backend/src/db/db.js'

import dotenv from 'dotenv'
dotenv.config();

import { Server  } from "socket.io";
import http from "http"; 

//database connect
connect();

//socket io setup
const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin: '*',
    }
})


io.on('connection' ,(socket) =>{
    console.log('new client ');


    socket.on('message',(message)=>{    
    console.log(message);
    
    })

    socket.on('disconnect', ()=>{
        console.log('clint disconnect');
        
    })
})

server.listen(process.env.PORT , ()=>{
    console.log("server start in " + process.env.PORT);
})