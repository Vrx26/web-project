const assert = require('assert');
const {expect} = require('chai');
const sinon = require('sinon');

const authController = require('../../controllers/auth')

const email = "test@test.com"

let req, res, next;

describe('shop auth', () => {
    beforeEach(() => {
        req = {
            userId: email
        }
        res = {
            status: sinon.stub(),
            json: sinon.spy()
        }
        next = sinon.spy()
    })
    it('auth controller', async () => {
        await authController.postLogin(req, res, next)
        expect(res.status.calledOnce).to.be.true

    });
})
