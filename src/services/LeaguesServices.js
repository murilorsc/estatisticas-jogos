const db = require('../models');
const Services = require('./Services');

class LeaguesServices extends Services {
    constructor() {
        super('Leagues');
    }
}

module.exports = LeaguesServices;