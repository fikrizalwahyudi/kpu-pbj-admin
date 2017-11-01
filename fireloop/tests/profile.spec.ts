var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('profile unit tests:', () => {
    it('Should create a profile instance', (done: Function) => {
        api.post('/profiles').send({
            id: 12345,
            nama: 'test',
            tgl_lahir: 'Wed Nov 01 2017 17:48:45 GMT+0700 (SE Asia Standard Time)'
        }).expect(200, done);
    });
});
