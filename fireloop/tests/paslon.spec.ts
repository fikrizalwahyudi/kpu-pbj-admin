var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('paslon unit tests:', () => {
    it('Should create a paslon instance', (done: Function) => {
        api.post('/paslons').send({
            id: 12345
        }).expect(200, done);
    });
});
