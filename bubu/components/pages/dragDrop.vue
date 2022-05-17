<template>
  <div style="height: 500px; width: 100%;  position: relative;">
    <!-- <vue-draggable-resizable class="my-class" :w="width" :h="height" :draggable="false" :parent="true" :resizable="true" @dragging="onDrag" @resizing="onResize">
    </vue-draggable-resizable> -->
    <div v-if="show">
      <vue-draggable-resizable class="my-class1" :w="100" :h="100" :on-drag="onDragCallback"></vue-draggable-resizable>
    </div>
    <button @click="show = !show">
      click
    </button>
    <vue-draggable-resizable :on-drag="onDragStartCallback">
    </vue-draggable-resizable>


  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  name: 'DragDrop',
  components:{VueDraggableResizable},
  data () {
    return {
      show: false,
      width: 1000,
      height: 800,
      width1: 0,
      height1: 0,
      x: 0,
      y: 0,
      x1: 0,
      y1: 0
    }
  },
  methods: {
    onResize (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag (x, y) {
      this.x = x
      this.y = y
    },
    onResize1 (x, y, width, height) {
      this.x1 = x
      this.y1 = y
      this.width1 = width
      this.height1 = height
    },
    onDrag1 (x, y) {
     this.x1 = x
      this.y1 = y
      
    },
    onDragCallback(x, y){
      console.log((x > this.width && x < 0) || (y > this.height && y < 0))
      if ((x > this.width && x < 0) || (y > this.height && y < 0)) {
          return false
        }
    },
     onDragStartCallback(x, y){
       console.log(x,y)
       if (x<0 || y < 0 || x> this.width || y> this.height) {
         return false
         
       }
    //   if ((x > 1000 && x < 0) || (y > 1000 && y < 0)) {
    //     return false
    // }
}
  }
}
</script>
<style>
.my-class {
  background-color: green;
  border: none !important;
}
</style>