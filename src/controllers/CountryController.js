const { CountriesServices } = require('../services/');
const countryApi = require('../api/countryApi.js');
const { json } = require('sequelize');
const countriesServices = new CountriesServices();

class CountryController {

    static async loadNewsCountries(req, res) {
        try {
            const allCountries = await countryApi.load();

            for (let index = 0; index < allCountries.data.length; index++) {
                const conditions = {
                    where: { country_name: allCountries.data[index].country_name },
                    defaults: {
                        country_key: allCountries.data[index].country_key,
                        country_iso2: allCountries.data[index].country_iso2,
                        country_logo: allCountries.data[index].country_logo
                    }
                };
                countriesServices.createRecord(conditions);//allCountries.data[index]);
            }

            return res.status(201).json(allCountries);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async findAllCountries(req, res) {
        const order = ['country_name'];

        try {
            const countries = await countriesServices.findAllRecords(order);
            return res.status(200).json(countries);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async findCountryByName(req, res) {
        const { name } = req.params;

        try {
            const country = await countriesServices.findByName(name);
            return res.status(200).json(country);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = CountryController;