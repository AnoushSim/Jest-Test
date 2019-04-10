const request = require('supertest');
const app = require('./service');

describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            console.log(response.body);
            expect(response.status).toEqual(200);
            done();
        });
    });

    test('It should response the GET method with condition and promise', () => {
        return request(app).get('/condition/ARA').then((response) => {
            console.log(response.body);
            expect(response.body.data).toBe('Not found');
        });
    });

    test('It should response the GET method with condition and async/await', async () => {
            const response = await request(app).get('/condition/Sevak');
            console.log(response.body);
            expect(response.body.status).toBe(false);
        });
});

describe('Test Post method' , () => {
    test('Post method', async () => {
        let query = {name:'Anoush'}
       const response = await request(app)
                                .post('/add')
                                .query(query)
                                .send({'name': 'Anoush'});
       expect(response.text).toBe('done')
    })
});

describe('Get data from mocked db after post method', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            console.log(response.body);
            expect(response.status).toEqual(200);
            done();
        });
    });
});