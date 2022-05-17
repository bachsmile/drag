<template>
  <cm-drag-drop
    :x="getProp(dataItem,'position.x',0)"
    :y="getProp(dataItem,'position.y',0)"
    :w="getProp(dataItem,'size.w',0)"
    :h="getProp(dataItem,'size.h',0)"
    :reSizeObject="reSizeObject"
    class="bgCss"
    @size="onSize"
  >
    <TextEdit :style="{'height': getProp(dataItem,'size.h',0), 'width': getProp(dataItem,'size.w',0)}" :classList="['styleText','styleInputs']" :textValue="getProp(dataItem,'title','text')" @sizeTxt="sizeTxt" />
  </cm-drag-drop>
</template>

<script>
import TextEdit from './../common/edit/TextEdit.vue'
import CmDragDrop from './../common/CmDragDrop.vue'
import Objects from '@/utils/Object.js'
import appMixin from '@/mixins/appMixin.js'

export default {
  name: 'TextEditDrag',
  components: { TextEdit, CmDragDrop},
  mixins: [appMixin],
  props: {
    option: {
      type: Object, 
      default : ()=> {}
    },
 },
  data() {
    return {
      dataItem: this.option,
      value: 'Title',
      disabled: true,
      reSizeObject:{
        w:0,
        h:0
      }
    }
  },
  mounted() {
    console.log(this.getProp(this.dataItem,'position.x',0))
  },
  methods: { 
    onSize(e){
      this.dataItem.size.w = e.w + 'px' 
      this.dataItem.size.h = e.h + 'px' 
      console.log(e)
    },
  
    sizeTxt(e){
      this.reSizeObject = {...e }
    }
  },
}
</script>
<style lang="css">
.styleText {
  font-size: 36px;
  font-weight: 500;
  line-height: 1.2;
}
.styleInputs {
  font-size: 36px;
  font-weight: 500;
  line-height: 1.2;
}
</style>