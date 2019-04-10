'use strict';
const timers = require('./timer');

jest.useFakeTimers();

test('Waits 3 seconds', () => {

    timers.timer();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function),3000);
});


test('is callback called after 3 seconds', () => {
    const callback = jest.fn();

    timers.timer(callback);

    expect(callback).not.toBeCalled(); //not called yet

    jest.runAllTimers();  // Fast-forward until all timers have been executed

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
});



describe('infiniteTimerGame', () => {
    test('schedules a 10-second timer after 1 second', () => {
        const callback = jest.fn();

        timers.infiniteTimer(callback);

        // At this point in time, there should have been a single call to setTimeout to schedule the end of the game in 1 second.
        expect(setTimeout).toHaveBeenCalledTimes(1 + 2); //+2 calls for tests above
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

        // Fast forward and exhaust only currently pending timers
        // (but not any new timers that get created during that process)
        jest.runOnlyPendingTimers();

        // At this point, our 1-second timer should have fired it's callback
        expect(callback).toBeCalled();

        // And it should have created a new timer to start the game over in
        // 10 seconds
        expect(setTimeout).toHaveBeenCalledTimes(2 + 2); //+2 calls for tests above
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
    });
});