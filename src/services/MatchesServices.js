const db = require('../models');
const Services = require('./Services');

class MatchesServices extends Services {
    constructor() {
        super('Matches');
    }
}

module.exports = MatchesServices;