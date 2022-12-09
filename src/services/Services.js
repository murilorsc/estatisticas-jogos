const db = require('../models');


class Services {
    constructor(model) {
        this.model = model;
    }

    async findOneRecord(condition = {}) {
        try {
            return db[this.model].findOne(condition);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async findAllRecords(order = {}) {
        try {
            return db[this.model].findAll(order);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async createRecord(conditions = {}) {
        try {
            return db[this.model].create(conditions);
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async updateRecord(values = {}, condition = {}) {
        try {
            return db[this.model].update(values, condition);
        } catch (error) {
            throw new Error(error.message);
        }
    };

}

module.exports = Services;