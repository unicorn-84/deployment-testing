require('dotenv').config();
const express = require('express');

const app = express();
app.get('/', async (req, res) => res.status(200).send('Deployment-testing'));
app.listen(process.env.APP_PORT || 9000, process.env.APP_HOST || '127.0.0.1');