var chai = require('chai')
chai.should()
var concat = require('concat-stream')

describe('literal-stream', function () {
  var literalStream = require('../')

  it('smoke test', function (done) {

    var hi = literalStream('hello there')

    hi.pipe(concat(function (res) {
      res.should.equal('hello there')
      done()
    }))


  })
})