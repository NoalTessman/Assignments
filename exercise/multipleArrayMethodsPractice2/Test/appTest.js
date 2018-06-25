const assert = require('chai').assert;
const app = require('../index');

describe('App', function(){
    it('App should return only numbers above 20', function(){
        assert.isBelow(app(), 20)
    })
})