require('dotenv').config();

const app = require('./app');
app.listen(process.env.APP_PORT || 9000, process.env.APP_HOST || '127.0.0.1');