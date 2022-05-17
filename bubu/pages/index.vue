<template>
  <div>
    <div class="bg" @drop="drop" @dragover.prevent="allowDrop">
      <component
        :is="item.component"
        v-for="(item, index) in items"
        :key="index"
        :option="item"
      >
      </component>
    </div>
    <list-option-drag />
  </div>
</template>

<script>
import Draggable from '../components/common/Draggable.vue'
import TextEdit from '../components/common/edit/TextEdit.vue'
import ListOptionDrag from '../components/domain/ListOptionDrag.vue'
import BxDragDrop from '../components/common/BxDragDrop.vue'
import CmDragDrop from '../components/common/CmDragDrop.vue'
import CardDrag from '../components/domain/CardDrag.vue'
import ImageDrag from '../components/domain/ImageDrag.vue'
import TextEditDrag from '@/components/domain/TextEditDrag.vue'

export default {
  name: 'IndexPage',
  components: { 
    Draggable, 
    TextEdit,
    ListOptionDrag, 
    BxDragDrop, 
    CmDragDrop, 
    TextEditDrag,
    CardDrag,
    ImageDrag,
  },
  data() {
    return {
      items:[],
    }
  },
  mounted() {
  },
  methods: {
    drop(e){
      const data = JSON.parse(e.dataTransfer.getData("text"))
      this.items.push(data)
      console.log(this.items)
    },
    allowDrop(e){
      console.log('allowDrop')
    },
  },
}
</script>
<style lang="css">
.bg {
  width: 100%;
  height: 100vh;
  background-image: url(https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000);
  background-size: cover;
}
</style>