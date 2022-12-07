const { Router } = require('express');
const EventController = require('../controllers/EventController.js');

const router = Router();

router
    .get('/event', EventController.findAllEvents);
module.exports = router;