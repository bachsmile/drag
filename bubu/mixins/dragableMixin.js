
export default {
  data() {
    return {
      greeting: 'Hello I am a mixin'
    }
  },
  created () {
    console.log('Mixin was applied!')
 },

 methods: {
    greet() {
       console.log(this.greeting)
    }
 }
}
