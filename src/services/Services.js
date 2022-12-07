const db = require('../models');


class Services {
    constructor(model) {
        this.model = model;
    }

    async findAllRecords(order = []) {
        return db[this.model].findAll({ order: [order] });
    };

    async createRecord(conditions = {}) {
        return db[this.model].findOrCreate(conditions);
    };

}

module.exports = Services;