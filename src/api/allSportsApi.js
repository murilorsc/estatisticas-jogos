const rp = require('request-promise');

const allSportsUri = 'https://apiv2.allsportsapi.com/football/?'; //process.env.ALL_SPORTS_URI;
const secretKey = '012a2301e93d06e63cbccdb3cb7b45e0388de8a92032906926a9fbc37ac62c67';//process.env.ALL_SPORTS_SECRET_KEY;
const timeZone = 'America/Sao_Paulo'; //process.env.TIME_ZONE;

async function load(met, from, to, matchId) {
    const response = {
        data: [],
        error: null
    };

    await rp({
        method: 'GET',
        uri: `${allSportsUri}`,
        qs: {
            met,
            from,
            to,
            matchId,
            APIkey: secretKey,
            timezone: timeZone,
        }
    }).then(res => {
        response.data = res ? JSON.parse(res).result : [];
    }).catch(err => {
        response.error = err;
    });

    return response;
};


module.exports = {
    load
};