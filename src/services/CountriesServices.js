const db = require('../models');
const Services = require('./Services');

class CountriesServices extends Services {
    constructor() {
        super('Countries');
    }

    async findByName(name) {
        try {
            return db[this.model].findOne({ where: { country_name: name } });
        } catch (error) {
            throw new Error(error.message);
        }
    };
}

module.exports = CountriesServices;