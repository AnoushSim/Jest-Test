const http = require('http');

exports.req  = function (url) {
    return new Promise(resolve => {
        // This is an example of an http request, for example to fetch
        // user data from an API.
        // This module is being mocked in __mocks__/req.js
        http.get({path: url}, response => {
            let data = '';
            response.on('data', _data => (data += _data));
            response.on('end', () => resolve(data));
        });
    });
}
