const assert = require('chai').assert;
const sayHello = require('../app').sayhello();

describe('App', function(){
    it('Sayhello should return hello',function(){
        let result = sayHello();
        assert.equal(result, "hello")
    });
});
describe('App', function(){
    it('Sayhello should be an integer',function(){
        let test = sayHello;
        assert.typeOf(test,'number')
    })
})