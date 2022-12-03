const app = require('../../app.js');
const bodyParser = require('body-parser');
const country = require('./countriesRoute.js');

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ message: 'The server is listening...' });
    }),
        app.use(
            bodyParser.json(),
            country
        );
};

module.exports = routes;


