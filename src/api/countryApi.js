const rp = require('request-promise');
const allSportsUri = process.env.ALL_SPORTS_URI;
const secretKey = process.env.ALL_SPORTS_SECRET_KEY;

async function getMatchs({ from, to, leagueId, met }) {
    const response = {
        data: [],
        error: null
    };

    console.log(from, to, leagueId, met);

    await rp({
        method: 'GET',
        uri: `${allSportsUri}`,
        qs: {
            APIkey: secretKey,
            timezone: "America/Sao_Paulo",
            from,
            to,
            met,
            leagueId
        }
    }).then(res => {
        response.data = res ? JSON.parse(res).result : [];
    }).catch(err => {
        response.error = err;
    });

    return response;
}


module.exports = {
    getMatchs
};