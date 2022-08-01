const http = require('http');
http.createServer((req, res) => {
    res.write('Testing http server + testing simultaneously')
    res.end();
}).listen(3001, console.log('Server started on port 3001'))

const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Testing express server + testing simultaneously')
    res.end()
})

const port = 3000

app.listen(port, console.log(`Server started on port ${port}`))