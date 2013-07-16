var Stream = require('stream')

function literalStream (literal) {

var stream = new Stream.Readable({objectMode: true})

  stream._read = function () {
    stream.push(literal)
    literal = null
  }

  return stream
}

module.exports = literalStream