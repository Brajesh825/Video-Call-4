let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server, {
    cors: {
        origin: "*", // Allow requests from this origin
        methods: ["GET", "POST"]
    }
});
let stream = require('./ws/stream');
let path = require('path');
let favicon = require('serve-favicon');
const cors = require('cors')

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.of('/stream').on('connection', stream);

server.listen(3000);