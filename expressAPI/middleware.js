exports.checkSomething = function (type) {
    return function (req, res, next) {
        switch (true) {
            case type === "BTC":
                req.coinType = 1;
                break;
            case type === "BCH":
                req.coinType = 2;
                break;
            case type === "BSV":
                req.coinType = 3;
                break;
            default:
                console.log("type => ", type);
                req.coinType = null;
        }
        next();
    }
};