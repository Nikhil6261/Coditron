import app from './src/app.js'
import connect from '../backend/src/db/db.js'
import messageModel from './src/model/massage.model.js'

import dotenv from 'dotenv'
dotenv.config();

import { Server } from "socket.io";
import http from "http";

//database connect
connect();

//socket io setup
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
    }
})


io.on('connection', (socket) => {
    console.log('new client ');

    const projectId = (socket.handshake.query.project);

    socket.join(projectId)

    socket.on('message', async (message) => {
        socket.broadcast.to(projectId).emit('message', (message))
        await messageModel.create({
            project: projectId,
            message: message
        })

    })


    //message history
    socket.on('chat-history', async () => {

        let text = await messageModel.find({ projectId })
        socket.emit('chat-history', text)
    })

    socket.on('disconnect', () => {
        console.log('clint disconnect');

    })
})

server.listen(process.env.PORT, () => {
    console.log("server start in " + process.env.PORT);
})