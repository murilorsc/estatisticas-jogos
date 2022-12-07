const CountryController = require('../controllers/CountryController.js');
const LeagueController = require('../controllers/LeagueController.js');
const EventController = require('./EventController.js');

class HistoryController {
    tch;
    static async findHistory(req, res) {
        try {

            CountryController.loadNewsCountries(req, res);
            LeagueController.loadNewsLeagues(req, res);
            EventController.loadNewsEvents(req, res);

            return res.status(201).json({ message: 'History has been imported' });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = HistoryController;