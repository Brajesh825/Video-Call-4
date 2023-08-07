let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server, {
    // cors: {
    //     origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    //     methods: ['GET', 'POST'],
    // },
});
let stream = require('./frontend/src/ws/stream');
let path = require('path');
// const cors = require('cors')

app.use('/assets', express.static(path.join(__dirname, '/frontend/src/assets')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/frontend/src" + '/index.html');
});

io.of('/stream').on('connection', stream);

server.listen(3000);