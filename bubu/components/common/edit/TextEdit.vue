<template>
  <div>
    <div v-show="disabled" class="card-title user-select-none" :class="classList[0]" @dblclick="dblclick">
      <span ref="textValues">{{ textValues }}</span>
    </div>
    <div v-show="!disabled" class="card-title user-select-none">
      <textarea
        ref="input"
        v-model="textValues"
        :rows="rows"
        controls
        type="text"
        class="styleInput w-100"
        :class="classList[1]"
        @blur="onFinishEdit"
      >
   </textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classList: {
      type: Array,
      default: ()=>[]
    },
    textValue: {
      type: String,
      default: 'text'
    },
    rows: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      disabled: true,
      textValues: ''
    }
  },
  mounted() {
    this.textValues = this.textValue
    console.log(this.textValue)
  },
  methods: {
    dblclick(e){
      console.log(e)
      this.disabled = false
      setTimeout(() => {
        this.$refs.input.focus()
      }, 100)
    },
    onFinishEdit(){
      this.disabled = true
      this.$nextTick(()=>{
        const size = {
          w: this.$refs.textValues.offsetWidth,
          h: this.$refs.textValues.offsetHeight,
        }
      console.log(this.$refs)
      this.$emit('sizeTxt', size)
      })
    }
  },
}
</script>

<style>
.styleInput {
  background: none;
  border: none;
  font-weight: 500;
  line-height: 1.2;
  opacity: 1;
  color: #212529;
  user-select: none;
}
.user-select-none {
  user-select: none;
}
</style>