const db = require('../models');
const Services = require('./Services');

class MatchesServices extends Services {
    constructor() {
        super('Matches');
    }

    async findMaxEventDate() {
        try {
            return db[this.model].findOne({ attributes: [[db.sequelize.fn('max', db.sequelize.col('event_date')), 'maxDate']], });
        } catch (error) {
            throw new Error(error.message);
        }
    };

}

module.exports = MatchesServices;