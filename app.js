const express = require('express');
const routes = require('./src/routes');


const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`SERVER HAS BEEN STARTED, PORT: ${port}`));

module.exports = app;