var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('pendidikan_terakhir unit tests:', () => {
    it('Should create a pendidikan_terakhir instance', (done: Function) => {
        api.post('/pendidikan-terakhirs').send({
            id: 12345,
            nama: 'test',
            keterangan: 'test'
        }).expect(200, done);
    });
});
