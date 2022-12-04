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

    // async buscaRegistroPorId(id) {
    //     return db[this.model].findByPk(id);
    // };

    // async atualizaRegistroUnico(dadosAtualizados, id, transacao = {}) {
    //     return db[this.model].update(dadosAtualizados, { where: { id: id } }, transacao);
    // };

    // async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    //     return db[this.model].update(dadosAtualizados, { where: { ...where } }, transacao);
    // };

    // async apagaRegistro(id, transacao = {}) {
    //     return db[this.model].destroy({ where: { id: id } }, transacao);
    // };

    // async restauraRegistro(id, transacao = {}) {
    //     return db[this.model].restore({ where: { id: id } }, transacao);
    // };
}

module.exports = Services;