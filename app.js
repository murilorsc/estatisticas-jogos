const express = require('express');
const routes = require('./src/routes');
const loadFixtures = require('./src/utils/loadFixtures.js');
const loadLiveScores = require('./src/utils/loadLiveScores.js');



const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`SERVER HAS BEEN STARTED, PORT: ${port}`));

loadFixtures();

module.exports = app;