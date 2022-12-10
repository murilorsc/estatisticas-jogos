const moment = require('moment');
const { LeaguesServices } = require('../services');
const allSportsApi = require('../api/allSportsApi.js');
const leaguesServices = new LeaguesServices();

class LeagueController {

    static async loadNewsLeagues() {
        try {

            console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Load Leagues has been started...`);

            const met = 'Leagues';
            const allLeagues = await allSportsApi.load(met);

            if (allLeagues) {

                for (const league of allLeagues.data) {

                    const condition = {
                        where: { league_name: league.league_name }
                    };

                    const values = {
                        league_key: league.league_key,
                        league_name: league.league_name,
                        country_key: league.country_key,
                        league_logo: league.league_logo,
                        country_logo: league.country_logo
                    };

                    const leagueRecorded = await leaguesServices.findOneRecord(condition);

                    if (!leagueRecorded) {
                        await leaguesServices.createRecord(values);
                    } else {
                        await leaguesServices.updateRecord(values, condition);
                    }

                }
            }

            console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Load Leagues has been finished.`);

        } catch (error) {
            console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Error loading leagues: ${error}`);

        }
    }

    static async findAllLeagues(req, res) {
        const order = { order: ['league_name'] };

        try {
            const leagues = await leaguesServices.findAllRecords(order);
            return res.status(200).json(leagues);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = LeagueController;