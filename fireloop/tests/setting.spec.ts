var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('setting unit tests:', () => {
    it('Should create a setting instance', (done: Function) => {
        api.post('/settings').send({
            id: 12345,
            device: 'test',
            skip: 12345
        }).expect(200, done);
    });
});
