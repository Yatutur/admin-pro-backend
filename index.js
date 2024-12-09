require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Create express server
const app = express();

// Cors Settings
app.use(cors());

// Database
dbConnection();

//mean_user
//HF3LdRr8a4y0AKA5

// Routes
app.get('/', (request, response) => {
  response.json({
    ok: true,
    msg: 'Hi World'
  })
  console.log();
  console.log();
});

app.listen(process.env.PORT, () => {
  console.log('The server is running in port ' + process.env.PORT);
});