const users = {
    4: {name: 'Mark'},
    5: {name: 'Paul'},
};

exports.req  = function (url) {
    return new Promise((resolve, reject) => {
        const userID = parseInt(url.substr('/users/'.length), 10);
        console.log(userID);
        process.nextTick(() =>
            users[userID]
                ? resolve(users[userID])
                : reject({
                    error: 'User with ' + userID + ' not found.',
                }),
        );
    });
}