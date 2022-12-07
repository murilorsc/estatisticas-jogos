const db = require('../models');
const Services = require('./Services');

class StatisticsServices extends Services {
    constructor() {
        super('Statistics');
    }
}

module.exports = StatisticsServices;