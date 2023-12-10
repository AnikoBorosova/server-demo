const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({ extended: true })); 


server.get('/', (req, res) => {
    res.send('Welcome on the main page!');
  });

server.get('/about', (req, res) => {
    res.send('About this company:');
  });

server.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, '/main.html'));
  });

server.post('/registration', (req, res) => {
    console.log('REQUEST ', req.body);
    res.send('Your username was registered.');
  });
  
server.listen(3000);