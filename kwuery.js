function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

function isNumber(data) {
  return type(data) === 'Number' && !isNaN(data)
}

function isBadNumber(data) {
  return type(data) === 'Number' && isNaN(data)
}

function isObject(data) {
  return type(data) === 'Object' && data.constructor === Object && Object.getPrototypeOf(data) === Object.prototype
}

function isArray(data) {
  return type(data) === 'Array'
}

function isFunction(data) {
  return typeof data === 'function'
}

function isUndefined(data) {
  return type(data) === 'Undefined'
}

function isEqual(...items) {
  for (let i = 0; i < items.length - 1; i++) {
    if (items[i] !== items[i + 1]) {
      if (type(items[i]) === type(items[i + 1])) {
        if (type(items[i]) === 'Array') {
          for (let j = 0; j < Math.max(items[i].length, items[i + 1].length); j++) {
            if (!this.isEqual(items[i][j], items[i + 1][j])) return false
          }
        } else if (type(items[i]) === 'Object') {
          if (Object.keys(items[i]).length === Object.keys(items[i + 1]).length) {
            for (const [key, value] of Object.entries(items[i])) {
              if (items[i + 1][key] !== value && !this.isEqual(items[i + 1][key], value)) return false
            }
          } else {
            return false
          }
        } else if (type(items[i]) === 'String') {
          if (items[i] !== items[i + 1]) return false
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }
  return true
}

function findObjects(objects, callback) {
  const results = []
  for (const o of objects) {
    if (callback(o)) results.push(o)
  }
  return results
}

module.exports = {
  type,
  isNumber,
  isBadNumber,
  isObject,
  isArray,
  isFunction,
  isEqual,
  findObjects,
}