<template>
  <cm-drag-drop
    :x="getProp(dataItem,'position.x',0)"
    :y="getProp(dataItem,'position.y',0)"
    :w="getProp(dataItem,'size.w',0)"
    :h="getProp(dataItem,'size.h',0)"
    :reSizeText="reSizeText"
    @size="onSize"
    @style="onStyle"
  >
    <div
      class="text-white styleDrag " 
      :style="{'height': (getProp(dataItem,'size.h',0) - 3) +'px',
               'width': getProp(dataItem,'size.w',0)+'px',
               'backgroundColor': getProp(style,'color',''),
               'backgroundImage': `url(${getProp(style,'bg','')})`}"
    >
    </div>
  </cm-drag-drop>
</template>

<script>
import BoxSetting from '../common/BoxSetting.vue'
import TextEdit from './../common/edit/TextEdit.vue'
import CmDragDrop from './../common/CmDragDrop.vue'
import Objects from '@/utils/Object.js'
import appMixin from '@/mixins/appMixin.js'
import TextEditDrag from '@/components/domain/TextEditDrag.vue'

export default {
  name: 'Pannel',
  components: { TextEdit, CmDragDrop, BoxSetting, TextEditDrag},
  mixins: [appMixin],
  props: {
    option: {
      type: Object, 
      default : ()=> {}
    },
 },
  data() {
    return {
      imageData: '',
      dataItem: this.option,
      value: 'Title',
      disabled: true,
      reSizeText:{
        w:0,
        h:0
      },
       items:[],
      style: {
        color: '',
        bg: ''
      }
    }
  },
  mounted() {
    console.log(this.getProp(this.dataItem,'position.x',0))
  },
  methods: { 
   onSize(e, id){
      this.dataItem.size.w = e.w 
      this.dataItem.size.h = e.h
      console.log(e)
      console.log(this.getProp(this.dataItem,'size.w',0))
    },
    onStyle(style){
      console.log(style)
      this.style.color = style.color
      this.style.bg = style.bg
    },
    sizeTxt(e){
      this.reSizeText = {...e }
    },
    loadFile(e){
	    this.imageData = URL.createObjectURL(e.target.files[0])
    }, 
  },
}
</script>
<style lang="css" scoped>
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
.styleDrag {
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
}
</style>