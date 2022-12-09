const moment = require('moment');
const { MatchesServices, StatisticsServices, GoalscorersServices } = require('../services');
const allSportsApi = require('../api/allSportsApi.js');
const matchesServices = new MatchesServices();
const statisticsServices = new StatisticsServices();
const goalscorersServices = new GoalscorersServices();

class EventController {

    static async loadEvents(met, from, to) {
        try {

            console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Load Events has been started...`);

            const allEvents = await allSportsApi.load(met, from, to);

            for (const event of allEvents.data) {
                const condition = {
                    where: { event_key: event.event_key }
                };

                const values = {
                    event_key: event.event_key,
                    event_date: event.event_date,
                    event_time: event.event_time,
                    event_home_team: event.event_home_team,
                    event_away_team: event.event_away_team,
                    event_halftime_result: event.event_halftime_result,
                    event_final_result: event.event_final_result,
                    event_ft_result: event.event_ft_result,
                    event_penalty_result: event.event_penalty_result,
                    event_status: event.event_status,
                    event_country_key: event.event_country_key,
                    league_key: event.league_key,
                    league_round: event.league_round,
                    league_season: event.league_season,
                    event_stadium: event.event_stadium,
                    event_referee: event.event_referee,
                    event_home_formation: event.event_home_formation,
                    event_away_formation: event.event_away_formation
                };

                const match = await matchesServices.findOneRecord(condition);

                if (!match) {
                    await matchesServices.createRecord(values);
                } else {
                    await matchesServices.updateRecord(values, condition);
                }

                //Goalscorers
                for (const goalscorers of event.goalscorers) {

                    const condition = {
                        where: { event_key: event.event_key, time: goalscorers.time, home_scorer: goalscorers.home_score, away_scorer: goalscorers.away_scorer }
                    };

                    const values = {
                        match_id: match[0].dataValues.id,
                        time: goalscorers.time,
                        home_scorer: goalscorers.home_scorer,
                        home_assist: goalscorers.home_assist,
                        score: goalscorers.score,
                        away_scorer: goalscorers.away_scorer,
                        away_assist: goalscorers.away_assist,
                        info: goalscorers.info,
                        info_time: goalscorers.info_time
                    };

                    const goalscorer = await goalscorersServices.findOneRecord(condition);

                    if (!goalscorer) {
                        await goalscorersServices.createRecord(values);
                    } else {
                        await goalscorersServices.updateRecord(values, condition);
                    }
                }

                //Statistics
                for (const statistics of event.statistics) {

                    const condition = {
                        where: { event_key: event.event_key, type: statistics.type }
                    };

                    const values = {
                        match_id: match[0].dataValues.id,
                        type: statistics.type,
                        home: statistics.home,
                        away: statistics.away,
                    };

                    const statistics = await statisticsServices.findOneRecord(condition);

                    if (!statistics) {
                        await statisticsServices.createRecord(values);
                    } else {
                        await statisticsServices.updateRecord(values, condition);
                    }
                }
            }

            console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Load Events has been finished.`);

        } catch (error) {
            console.log(`${moment().format('YYYY/MM/DD HH:mm:ss')} - Error loading events: + ${error}`);

        }
    }

    static async findAllEvents(req, res) {
        const order = { order: ['event_date'] };

        try {
            const matches = await matchesServices.findAllRecords(order);
            return res.status(200).json(matches);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async findMaxEventDate() {
        try {
            const maxDate = await matchesServices.findMaxEventDate();
            return maxDate.dataValues.maxDate;

        } catch (error) {
            return 'Error to load last load date';
        }
    }

}

module.exports = EventController;