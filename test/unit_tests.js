import chai from 'chai'
import mocha from 'mocha'

const { assert } = chai
const { suite, test } = mocha

suite('Unit Tests', () => {
    /*================================== 
        BASIC ASSERTION
    ====================================*/
    suite('Basic Assertion', () => {
        test('#isNull, isNotNull', () => {
            assert.isNull(null, 'null is null')
        })
    })

    /*================================== 
        ARRAY
    ====================================*/
    suite('Array', () => {
        test('#isArray', () => {
            assert.isArray([], 'empty array is Array')
        })
    })
})
