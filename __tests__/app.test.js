const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('responds with 200', async () => {
        await request(app)
            .get('/')
            .expect(200);
    });
});
