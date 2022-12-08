const express = require('express');
const routes = require('./src/routes');
const loadInitial = require('./src/utils/loadInitial.js');



const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`SERVER HAS BEEN STARTED, PORT: ${port}`));

loadInitial();

module.exports = app;