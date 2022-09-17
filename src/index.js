/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const express = require('express');
const cors = require('cors');
const environment = require('./config/environment.config');
const configRoutes = require('./routes/router');

const app = express();
environment.configEnv();

let db = null
if (process.env.NODE_ENV == "test") {
  db = require('./config/db');
}

const corsOptions = {
  origin: `${global.URL_API}`,
  origin: '*',
};
app.use(cors(corsOptions));

app.disable('x-powered-by');
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb' }));

configRoutes(app)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

