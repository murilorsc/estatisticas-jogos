const moment = require('moment');
const { CountriesServices } = require('../services/');
const allSportsApi = require('../api/allSportsApi.js');
const countriesServices = new CountriesServices();


class CountryController {

    static async loadNewsCountries() {
        try {

            console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Loading countries....`);

            const met = 'Countries';
            const allCountries = await allSportsApi.load(met);

            for (const country of allCountries.data) {
                const conditions = {
                    where: { country_name: country.country_name },
                    defaults: {
                        country_key: country.country_key,
                        country_name: country.country_name,
                        country_iso2: country.country_iso2,
                        country_logo: country.country_logo
                    }

                };
                await countriesServices.createRecord(conditions);
            }

            console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Countries has been loaded`);


        } catch (error) {
            console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Error loading countries: + ${error}`);
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