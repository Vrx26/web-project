const mongoose = require('mongoose');

const request = require('supertest')

describe('test cases', () => {
    it('should connect to BD', (done) => {
        mongoose
            .connect(`mongodb+srv://admin:admin@messenger.sjr8v.mongodb.net/Messenger?retryWrites=true&w=majority`, {
                useNewUrlParser : true,
                useUnifiedTopology : true
            })
            .then(() => done())
            .catch((err) => {
                console.error(err)
                done()
            })
    }).timeout(10000)

    describe('routes', () => {
        require("./routes/shop.test")
    })

    describe('controllers', () => {
        require('./controllers/shop.test')
    })

})
