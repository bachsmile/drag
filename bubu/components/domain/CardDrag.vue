<template>
  <cm-drag-drop
    :x="getProp(dataItem,'position.x',0)"
    :y="getProp(dataItem,'position.y',0)"
    :w="getProp(dataItem,'size.w',0)"
    :h="getProp(dataItem,'size.h',0)"
    :reSizeText="reSizeText"
    @size="onSize"
  >
    <div class="card text-white bg-primary " :style="{'height': getProp(dataItem,'size.h',0), 'width': getProp(dataItem,'size.w',0)}">
      <img class="card-img-top " :src="imageData" alt="">
      <input
        v-if="!imageData"
        id="file"
        type="file"
        accept="image/*"
        name="image"
        @change="loadFile($event)"
      >
      <div class="card-body">
        <h4 class="card-title bgCss">
          <TextEdit :classList="['styleText','styleInputs']" />
        </h4>
        <p class="card-text">
          <TextEdit />
        </p>
      </div>
    </div>
    <div>
      <box-setting />
    </div>
  </cm-drag-drop>
</template>

<script>
import BoxSetting from '../common/BoxSetting.vue'
import TextEdit from './../common/edit/TextEdit.vue'
import CmDragDrop from './../common/CmDragDrop.vue'
import Objects from '@/utils/Object.js'
import appMixin from '@/mixins/appMixin.js'

export default {
  name: 'CardDrag',
  components: { TextEdit, CmDragDrop, BoxSetting},
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
      }
    }
  },
  mounted() {
    console.log(this.getProp(this.dataItem,'position.x',0))
  },
  methods: { 
    onSize(e, id){
      this.dataItem.size.w = e.w + 'px' 
      this.dataItem.size.h = e.h + 'px' 
      console.log(e)
    },
  
    sizeTxt(e){
      this.reSizeText = {...e }
    },
    loadFile(e){
	    this.imageData = URL.createObjectURL(e.target.files[0])
    }
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
.bgCss {
  background-color: red;
}
</style>