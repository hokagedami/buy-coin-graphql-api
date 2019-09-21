const getBtcUsdRate = require('./btc-usd-rate');




module.exports = resolverFunction = async (type, margin, exchangeRate) => {
    const usdRate = await getBtcUsdRate();
    const marginValue = margin * 0.01 * usdRate;
    let rate = null;
    switch (type) {
        case 'sell':
            rate = usdRate - marginValue;
            break;
        case 'buy':
            rate = usdRate + marginValue;
            break;
        default:
            throw new Error(`invalid argument, type expected to be 'buy' or 'sell'`);
    }
    return parseFloat((exchangeRate * rate).toFixed(4));
};