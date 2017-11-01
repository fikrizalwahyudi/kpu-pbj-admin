var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('event unit tests:', () => {
    it('Should create a event instance', (done: Function) => {
        api.post('/events').send({
            id: 12345
        }).expect(200, done);
    });
});
