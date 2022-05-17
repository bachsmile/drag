<template>
  <cm-drag-drop
    :x="getProp(dataItem,'position.x',0)"
    :y="getProp(dataItem,'position.y',0)"
    :w="getProp(dataItem,'size.w',0)"
    :h="getProp(dataItem,'size.h',0)"
    :reSizeObject="reSizeObject"
    @size="onSize"
  >
    <img
      ref="img"
      class="card-img-top"
      :src="imageData"
      alt=""
      :style="{'width': getProp(dataItem,'size.w',0)+'px', 'height': getProp(dataItem,'size.h',0)+'px', 'max-width': '500px', 'max-height': '500px'}"
    >
    <input
      v-if="!imageData"
      id="file"
      type="file"
      accept="image/*"
      name="image"
      class="border"
      @change="loadFile($event)"
    >
    <div class="bgCss">
      123
    </div>
  </cm-drag-drop>
</template>

<script>
import CmDragDrop from './../common/CmDragDrop.vue'
import Objects from '@/utils/Object.js'
import appMixin from '@/mixins/appMixin.js'

export default {
  name: 'ImageDrag',
  components: { CmDragDrop},
  mixins: [appMixin],
  props: {
    option: {
      type: Object, 
      default : ()=> {}
    },
 },
  data() {
    return {
      reSizeObject:{
        w:0,
        h:0
      } ,
      imageData: '',
      message: '',
      dataItem: this.option,
      value: 'Title',
      disabled: true,
      reSizeText:{
        w:0,
        h:0
      }
    }
  },
  mounted() {
     console.log(this.$refs)
    console.log(this.getProp(this.dataItem,'position.x',0))
  },
  methods: { 
    onSize(e, id){
      this.dataItem.size.w = e.w 
      this.dataItem.size.h = e.h
      console.log(e)
      console.log(this.getProp(this.dataItem,'size.w',0))
    },
  
    sizeTxt(e){
      this.reSizeText = {...e }
    },
    loadFile(e){
	    this.imageData = URL.createObjectURL(e.target.files[0])
      setTimeout(() => {
        this.reSizeObject = {
         ...{},
         ...{
            w: this.$refs.img.clientWidth,
            h: this.$refs.img.clientHeight,
         }
        }
        console.log(this.reSizeObject)
      }, 0)
    },
    change(e){
      console.log(e)
    }
  },
}
</script>
<style lang="css" >
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
.border {
  border: 1px solid #000 !important;
}
</style>