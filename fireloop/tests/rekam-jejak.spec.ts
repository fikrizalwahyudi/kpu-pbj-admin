var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('rekam_jejak unit tests:', () => {
    it('Should create a rekam_jejak instance', (done: Function) => {
        api.post('/rekam-jejaks').send({
            id: 12345
        }).expect(200, done);
    });
});
