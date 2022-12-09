const CountryController = require('../controllers/CountryController.js');
const LeagueController = require('../controllers/LeagueController.js');
const EventController = require('../controllers/EventController.js');
const moment = require('moment');
const CronJob = require('cron').CronJob;


const rp = require('request-promise');

new CronJob(process.env.CRON_TIME_LOAD, async () => {
    loadFixtures();
}, null, true, 'America/Sao_Paulo');

async function loadFixtures() {

    console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Load Fixtures has been started...`);

    await CountryController.loadNewsCountries();
    await LeagueController.loadNewsLeagues();

    const maxEventDate = await EventController.findMaxEventDate();
    let lasLoadDate = moment(maxEventDate || '2022-10-01');
    const today = moment();
    const met = 'Fixtures';

    while (lasLoadDate.isSameOrBefore(today, 'days')) {
        console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Date load ${lasLoadDate.format('YYYY-MM-DD')}`);

        await EventController.loadFixtures(met, lasLoadDate.format('YYYY-MM-DD'), lasLoadDate.format('YYYY-MM-DD'));

        lasLoadDate = lasLoadDate.add(1, 'days');
    }

    console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Load Fixtures has been finished.`);

}

module.exports = loadFixtures;