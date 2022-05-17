const Objects = {
  isNotEmpty (object) {
    switch (object?.constructor) {
      case Object:
        return !!Object.keys(object).length 
      case Array:
        return !!object.length
      default:
        return !!object
    }
  },
  isEmpty (object) {
    switch (object?.constructor) {
      case Object:
        return !Object.keys(object).length 
      case Array:
        return !object.length
      default:
        return !object
    }
  },
  isArray(object) {
    return object.constructor === Array
  }
}
export default Objects