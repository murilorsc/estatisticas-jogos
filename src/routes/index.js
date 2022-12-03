
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'O servidor está escutando..' });
    });
};

module.exports = routes;