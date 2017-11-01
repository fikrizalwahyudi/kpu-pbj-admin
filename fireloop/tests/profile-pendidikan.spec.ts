var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('profile_pendidikan unit tests:', () => {
    it('Should create a profile_pendidikan instance', (done: Function) => {
        api.post('/profile-pendidikans').send({
            id: 12345
        }).expect(200, done);
    });
});
