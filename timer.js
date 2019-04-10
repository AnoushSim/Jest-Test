'use strict'

exports.timer = function (callback) {
    console.log('Ready to go');
    setTimeout(() => {
        console.log('GONE!!');
        callback && callback();
    }, 3000)
}


exports.infiniteTimer =  function (callback) {
    console.log('Ready....go!');

    setTimeout(() => {
        console.log('Times up! 10 seconds before the next game starts...');
        callback && callback();

        // Schedule the next game in 10 seconds
        setTimeout(() => {
            infiniteTimerGame(callback);
        }, 10000);
    }, 1000);
};

