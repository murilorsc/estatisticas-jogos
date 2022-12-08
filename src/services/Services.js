const db = require('../models');


class Services {
    constructor(model) {
        this.model = model;
    }

    async findAllRecords(order = []) {
        try {
            return db[this.model].findAll({ order: [order] });
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async createRecord(conditions = {}) {
        try {
            return db[this.model].findOrCreate(conditions);
        } catch (error) {
            throw new Error(error.message);
        }
    };

}

module.exports = Services;