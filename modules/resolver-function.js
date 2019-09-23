const getBtcUsdRate = require('./btc-usd-rate');
const marginValue = require('./margin-value');




module.exports = resolverFunction = async (type, margin, exchangeRate) => {
    let usdRate = null, rate = null;
    switch (type) {
        case 'sell':
            usdRate = await getBtcUsdRate();
            rate = usdRate - marginValue(margin, usdRate);
            break;
        case 'buy':
            usdRate = await getBtcUsdRate();
            rate = usdRate + marginValue(margin, usdRate);
            break;
        default:
            throw new Error(`invalid argument, type expected to be 'buy' or 'sell'`);
    }
    return parseFloat((exchangeRate * rate).toFixed(4));
};