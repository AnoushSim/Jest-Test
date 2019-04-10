const request = require('request');

exports.cb = function(data) {
    console.log('data is ', data);
    return data
};

exports.fetch = (callback) => {
    request('http://bcash.gap600.com/',(err, response, body) => {
        let obj = JSON.parse(body);
        console.log('invokeeeed', obj.network);
        callback(obj.network)
    })
}

exports.fetch_promise = (data) => {
        return new Promise((resolve, reject) => {
            if(data === 'main')
                 resolve('main')
            else reject('null')
        })
}
