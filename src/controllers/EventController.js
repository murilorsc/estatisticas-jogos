const { MatchesServices, StatisticsServices, GoalscorersServices } = require('../services');
const allSportsApi = require('../api/allSportsApi.js');
const matchesServices = new MatchesServices();
const statisticsServices = new StatisticsServices();
const goalscorersServices = new GoalscorersServices();

class EventController {

    static async loadNewsEvents(req, res) {
        try {
            const met = 'Fixtures';
            const from = req.query.from;
            const to = req.query.to;
            const matchId = req.query.matchId;

            const allEvents = await allSportsApi.load(met, from, to, matchId);

            for (const event of allEvents.data) {
                const conditions = {
                    where: { event_key: event.event_key },
                    defaults: {
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
                    }
                };

                const match = await matchesServices.createRecord(conditions);

                //Goalscorers
                for (const goalscorers of event.goalscorers) {

                    console.log(goalscorers);

                    const conditions = {
                        where: { match_Id: match[0].dataValues.id, time: statistics.time, home_assist: goalscorers.home_assist, away_scorer: goalscorers.away_scorer },
                        defaults: {
                            match_id: match[0].dataValues.id,
                            time: goalscorers.time,
                            home_assist: goalscorers.home_assist,
                            score: goalscorers.score,
                            away_scorer: goalscorers.away_scorer,
                            away_assist: goalscorers.away_assist,
                            info: goalscorers.info,
                            info_time: goalscorers.info_time
                        }
                    };

                    goalscorersServices.createRecord(conditions);
                }

                //Statistics
                for (const statistics of event.statistics) {

                    const conditions = {
                        where: { match_Id: match[0].dataValues.id, type: statistics.type },
                        defaults: {
                            match_id: match[0].dataValues.id,
                            type: statistics.type,
                            home: statistics.home,
                            away: statistics.away,
                        }
                    };

                    statisticsServices.createRecord(conditions);
                }
            }

            return;

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async findAllEvents(req, res) {
        const order = ['event_date'];

        try {
            const matches = await matchesServices.findAllRecords(order);
            return res.status(200).json(matches);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = EventController;