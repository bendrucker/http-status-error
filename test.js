'use strict'

var test = require('tape')
var httpStatusError = require('./')

test(function (t) {
  t.equal(httpStatusError(200), null)

  var err = httpStatusError(404)
  t.ok(err)
  t.equal(err.message, 'Not Found (404)')
  t.equal(err.statusCode, 404)

  t.end()
})
