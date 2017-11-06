var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('jadwal unit tests:', () => {
    it('Should create a jadwal instance', (done: Function) => {
        api.post('/jadwals').send({
            id: 12345,
            tgl_mulai: 'Fri Nov 03 2017 23:35:07 GMT+0700 (SE Asia Standard Time)',
            keterangan: 'test'
        }).expect(200, done);
    });
});
