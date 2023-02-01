
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http)

app.get('/', (req, res)=> {
    res.sendFile(__dirname+ '/index.html')
    app.use(express.static(__dirname+ "/node.js_socket.io"))
    http.listen(3000, ()=> {
        console.log("The Server is connected.")
    })
})