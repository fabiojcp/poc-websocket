const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { connectedClients } = require('./app-ws');
const { WebSocket } = require('ws');

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));

app.use(helmet());

app.use(express.json());

app.use(morgan('dev'));

app.post('/login', (req, res, next) => {
  res.json({ token: '123456' });
});

app.post('/send-json', (req, res, next) => {
  const message = {
    type: 'outsideData',
    data: req.body
  };

  connectedClients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });

  res.status(200).send('Message sent to all clients');
});

module.exports = app;
