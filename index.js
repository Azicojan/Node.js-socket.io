
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
let path = require('path');



app.get('/', (req, res)=> {
    
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname + '/assets')));

io.on('connection', (socket) => {
    socket.on('chat message', (msg) =>{
        io.emit('chat message',msg);
          
        console.log('message:' + msg);
    });
    console.log('a user connected');
});

server.listen(3000, ()=> {
        
        console.log("The Server is connected.")
    })
