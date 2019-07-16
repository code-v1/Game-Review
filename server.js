const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');

var cors = require('cors')

app.use(cors())

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
const gamesRouter = require('./routes/api/games')
app.use('/games', gamesRouter);
app.use('/api/users', require('./routes/api/users'));
app.use('/api/games',require('./routes/api/games'));
// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use PORT 3001 instead of 3000 during
// development to avoid collision with React's dev server
const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`Express app running on port ${PORT}`)
});