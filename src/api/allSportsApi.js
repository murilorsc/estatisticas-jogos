const rp = require('request-promise');
require('dotenv').config();

const allSportsUri = process.env.ALL_SPORTS_URI;
const secretKey = process.env.ALL_SPORTS_SECRET_KEY;
const timeZone = process.env.ALL_SPORTS_TIME_ZONE;

async function load(met, from, to) {
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