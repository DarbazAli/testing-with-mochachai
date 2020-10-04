import chai from 'chai'
import mocha from 'mocha'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

const { assert, request } = chai
const { suite, test } = mocha

import app from '../app.js'

suite('SERVER', () => {
    /*================================== 
       HTTPS ASSERTIONS
    ====================================*/
    suite('APP', () => {
        test('GET /, Should return a message', (done) => {
            request(app)
                .get('/')
                .end((err, res) => {
                    assert.equal(
                        res.status,
                        200,
                        'response status should be 200'
                    )
                    assert.equal(
                        res.text,
                        'hello',
                        'response text should be hello'
                    )
                    done()
                })
        })
    })
})
