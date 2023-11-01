require('rootpath')();
const express = require('express');
const app = express();

const cors = require('cors');

const errorHandler = require('_middleware/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api routes
app.use('/api/seasons', require('./routes/seasons/seasons.controller'));
app.use('/api/stats', require('./routes/stats/stats.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 3200;
app.listen(port, () => console.log('Server listening on port ' + port));