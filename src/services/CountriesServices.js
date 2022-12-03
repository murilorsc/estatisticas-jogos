const db = require('../models');
const Services = require('./Services');

class CountriesServices extends Services {
    constructor() {
        super('Countries');
    }

    async findByName(name) {
        return db[this.model].findOne({ where: { country_name: name } });
    };
}

module.exports = CountriesServices;