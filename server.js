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
    console.log('Incoming request with username ', req.body);

    /*
    if (!req.body.username) {
      res.status(400);
      res.send('Bad Request: username is missing.');
    } else {
      res.send('Your username was registered.');
    }
    */
    // res.send('Your username was registered.');
  });
  
server.listen(3000);