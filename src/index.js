// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coinsType = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    let resObj = {};

    if (currency <= 0) { return {}; }

    if (currency > 10000) { return {error: "You are rich, my friend! We don't have so much coins for exchange"}; }

    for (let p in coinsType) {
        if (!coinsType.hasOwnProperty(p)) { continue; }

        let v = parseInt(currency / coinsType[p]);
        if (v) {
            resObj[p] = v;
            currency = currency % coinsType[p];
        }
    }

    return resObj;
}
