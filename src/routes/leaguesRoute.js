const { Router } = require('express');
const LeagueController = require('../controllers/LeagueController.js');

const router = Router();

router
    .get('/league', LeagueController.findAllLeagues);
module.exports = router;