const express = require('express');
const app = express();
const cors = require('cors');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser'); //import body-parser package
const morgan = require('morgan'); // import morgan package

const apiRouter = require('./api/api');

const PORT = process.env.PORT || 4000; // port the server will listen on
                                       // process.env.PORT is set for testing

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev')); //middleware for easier debugging for all routes

app.use('/api', apiRouter); //mounting at all routes starting at /api

app.use(errorhandler());






app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
}); //starting server and logging a message to the console
module.exports = app; // exporting app for use in the test file

