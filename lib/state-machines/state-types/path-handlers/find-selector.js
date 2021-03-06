const _ = require('lodash')
const jp = require('jsonpath')

function findSelector (path) {
  if (path === null) {
    return nullSelection
  }

  if (path === undefined || path === '$') {
    return defaultSelection
  }

  return ctx => selectPath(path, ctx)
} // findSelector

function nullSelection () {
  return { }
} // nullSelection

function defaultSelection (ctx) {
  return _.cloneDeep(ctx)
} // defaultSelection

function selectPath (path, ctx) {
  return _.cloneDeep(jp.value(ctx, path))
} // selectPath

module.exports = findSelector
