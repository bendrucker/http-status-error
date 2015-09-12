'use strict'

var assert = require('assert-ok')
var codes = require('builtin-status-codes')

module.exports = function httpStatusError (code) {
  assert(typeof code === 'number', 'expected http status number')
  if (code >= 200 && code < 300) return null
  var err = new Error(codes[code] + ' (' + code + ')')
  err.statusCode = code
  return err
}
