const { CountriesServices } = require('../services/');
const countryApi = require('../api/countryApi.js');
const countriesServices = new CountriesServices();

class CountryController {
    static async loadCountries(req, res) {
        try {
            const allCountrys = await countryApi.load();
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