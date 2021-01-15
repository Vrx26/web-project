const mongoose = require('mongoose');

const request = require('supertest')

describe('test cases', () => {
    it('should connect to BD', (done) => {
        mongoose
            .connect(`mongodb+srv://mongo:mongopass@localhost/shop?retryWrites=true&w=majority`, {
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
        require("./routes/chat.test")
    })

    describe('controllers', () => {
        require('./contrrollers/chat.test')
    })

})
