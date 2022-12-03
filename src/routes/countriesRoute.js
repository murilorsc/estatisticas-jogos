const { Router } = require('express');
const CountryController = require('../controllers/CountryController.js');

const router = Router();

router
    .get('/country', CountryController.loadCountries)
    .get('/country/:name', CountryController.findCountryByName);
module.exports = router;