const express = require('express');
const cors = require('cors');
const environment = require('./config/environment.config');
const configRoutes = require('./routes/router');

const app = express();
environment.configEnv();

let db = null
if (process.env.NODE_ENV == "dev") {
  db = require('./config/db');
}

const corsOptions = {
  origin: `${global.URL_API}`,
};
app.use(cors(corsOptions));

app.disable('x-powered-by');
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb' }));

configRoutes(app)

module.exports = app;
