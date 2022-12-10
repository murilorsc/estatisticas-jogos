const EventController = require('../controllers/EventController.js');
const moment = require('moment');
const CronJob = require('cron').CronJob;


const rp = require('request-promise');

// new CronJob(process.env.CRON_TIME_LIVESCORES, async () => {
//     loadLiveScores();
// }, null, true, 'America/Sao_Paulo');

async function loadLiveScores() {

    console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Load Live Scores has been started...`);
    const met = 'Livescore';

    await EventController.loadEvents(met);

    console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Load Live Scores has been finished.`);

}

module.exports = loadLiveScores;