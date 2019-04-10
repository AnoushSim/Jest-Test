let sum = require('./sum');
let product = require('./product');
let functions = require('./callback');


test('testing the sum function', () => {
    expect(sum(1,3)).toEqual(4)
});

test('testing the product function', () => {
    expect(product(1,3)).not.toBe(9)
});

test('object assignment', () => {
    let obj = {one : 1};
    obj["two"] = 2;
    expect(obj).toEqual({one:1,two:2})
});

test("testing null object", () => {
    expect(null).toBeNull();
    expect(null).toBeDefined();
    expect(null).toBeFalsy();
});

test('testing floating number', () => {
    let num = 0.1 + 0.1;
    expect(num).toBeCloseTo(0.2);
});

test('testing string with regex', () => {
    expect('my code').toMatch(/m/); //regex
});

test('testing string', () => {
    expect('my code').toMatch('co'); //string
});


test('testing array', () => {
    let arr = ['a','b','c'];
    expect(arr).not.toContain('d');
});

function compileAndroidCode() {
    throw new ConfigError('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
});

test('the data is main', done => {
    function callback(data) {
        console.log('dataaa ',data)
        expect(data).toBe('main');
        done();
    }

    functions.fetch(callback);
});

test('the data is main with promise ',() => {
    functions.fetch_promise('main').then(data => {
        expect(data).toBe('main');
})
});

test('the data is main with async', async () => {
    expect.assertions(1);
    let data = await functions.fetch_promise('main');
    expect(data).toBe('main');
});

test('toBe and toEqual', () => {
    expect([1,2,3]).toEqual([1,2,3]);
    expect([1,2,3]).not.toBe([1,2,3]);
});
