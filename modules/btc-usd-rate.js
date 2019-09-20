const axios = require('axios');


module.exports = getBtcUsdRate = async () => {
    try {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const httpReqRes = await axios({
            method: 'GET',
            url
        });
        return httpReqRes.data.bpi.USD.rate_float;
    }
    catch (e) {
        throw new Error(`CoinDesk API call error.`);
    }
};