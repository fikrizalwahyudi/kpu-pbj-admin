var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('unggah unit tests:', () => {
    it('Should create a unggah instance', (done: Function) => {
        api.post('/unggahs').send({}).expect(200, done);
    });
});
