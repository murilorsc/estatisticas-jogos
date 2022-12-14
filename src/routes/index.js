const app = require('../../app.js');
const bodyParser = require('body-parser');
const country = require('./countriesRoute.js');
const league = require('./leaguesRoute.js');
const event = require('./eventsRoute.js');

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ message: 'The server is listening...' });
    }),
        app.use(
            bodyParser.json(),
            country,
            league,
            event
        );
};

module.exports = routes;


