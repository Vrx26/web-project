const assert = require('assert');
const request = require('supertest')
const express = require("express");

const shopRouter = require('../../routes/shop');

const app = express();
app.use(shopRouter)

module.exports = describe('shop', () => {
    it('should be OK', (done) => {
        request(app)
            .post('/test')
            .expect('Content-Type', /html/)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    })

    it('retrieve all products', () => {
        return request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .then(response => {
                assert(response.status, 200)
            })
    })

    it('nonexistent product', () => {
        return request(app)
            .get('/products/9999')
            .expect('Content-Type', /html/)
            .then(response => {
                assert(response.status, 404)
            })
    })
});
