
export default {
  components: {
  },
  data() {
    return {
    
    }
  },
  created() {

  },
  methods: {
    getProp(object, keys, deft) {
      keys = Array.isArray(keys) ? keys : keys.split('.')
      console.log(keys)
      object = object?.[keys[0]]
      console.log(object)
      if (object && keys.length > 1) {
        return this.getProp(object, keys.slice(1))
      }
      return object === undefined ? deft : object
    },
  },
}
