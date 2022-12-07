const db = require('../models');
const Services = require('./Services');

class GoalscorersServices extends Services {
    constructor() {
        super('Goalscorers');
    }
}

module.exports = GoalscorersServices;