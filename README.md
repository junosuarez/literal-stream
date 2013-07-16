# literal-stream
wrap a string literal in a readable stream

## usage
```js
var literalStream = require('literal-stream')

literalStream('foo').pipe(process.stdout)
// foo
```


## api

literalStream(literal: String) => ReadableStream

literalStream returns a Streams2 ReadableStream which will emit `literal` once and then end.

## installation

    $ npm install literal-stream


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

MIT. (c) 2013 jden <jason@denizac.org>. See LICENSE.md
