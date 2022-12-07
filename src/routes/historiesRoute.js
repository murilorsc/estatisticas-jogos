const { Router } = require('express');
const HistoryController = require('../controllers/HistoryController.js');

const router = Router();

router
    .get('/history', HistoryController.findHistory);
module.exports = router;