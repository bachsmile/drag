<template>
  <div
    class="draggable-common"
    :class="classList"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <vue-draggable-resizable
      ref="slotElm"
      :key="key"
      :w="option.w"
      :h="option.h"
      :x="option.x" 
      :y="option.y"
      :z="z"
      :class="{'my-class1': isBorder}"
      :onResizeStart="onResizeStart"
      :on-drag-start="onDragStart"
      :onDrag="onDragCallback"
      :resizable="resizable"
      :handles="handles"
      @resizing="onResize"
      @dragging="onDrag"
      @dragstop="onDragStop"
      @resizestop="onResizeStop"
    >
      <div
        :id="key"
        class="style"
      >
        <slot class=" hiden"></slot>
      </div>
      <div v-if="isShowSetting" class="optionTopIn">
        <div class="optionBox pointShow">
          <font-awesome-icon class="font-awesome-icon icon-setting" :icon="['fas', 'tools']" inverse @click="openSetting(key)" />
        </div>
      </div>
    </vue-draggable-resizable>
    <div class="optionTop optionFixed" :class="{'active':isActice}">
      <div class="optionBoxFix">
        <font-awesome-icon class="font-awesome-icon" :icon="['fas', 'tools']" inverse @click="openSetting(key)" />
        <div class="option-tool" :class="{'active':isActice}">
          <div class="tool-list" :class="{'active': isActice}">
            <font-awesome-icon class="font-awesome-icon" icon="fab fa-buffer" inverse @click="settingShow = !settingShow" />
          </div>
        </div>
      </div>
    </div>
    <div class="setting-box" :class="{'setting-box-active':settingShow}">
      <b-list-group>
        <b-list-group-item>
          <div class="form-group">
            <h1 for="">
              {{ key }}
            </h1>
            <div class="form-group pt-2">
              <div class="row d-flex my-2 justify-content-around">
                <div class="col-3 d-flex align-items-center">
                  <h5 class="p-0 mb-0">
                    Width
                  </h5>
                </div>
                <div class="col-3 d-flex align-items-center">
                  <label for="" class="mr-1 mb-0">Auto</label>
                  <input id="" v-model="isAuto.w" type="checkbox" name="" @change="pickAuto('w')">
                </div>
                <div class="col-3 d-flex align-items-center">
                  <label for="" class="mr-1 mb-0">Full</label>
                  <input id="" v-model="isFull.w" type="checkbox" name="" @change="pickFull('wf')">
                </div>
              </div>
              <input
                id=""
                v-model="boxSetting.w"
                :disabled="isAuto.w"
                type="number"
                class="form-control"
                name="z-indexID"
                aria-describedby="helpId"
                placeholder=""
                @change="onChange('w')"
              >
            </div>
           
            <div class="form-group pt-2">
              <div class="row d-flex my-2 justify-content-around">
                <div class="col-3 d-flex align-items-center">
                  <h5 class="p-0 mb-0">
                    Height
                  </h5>
                </div>
                <div class="col-3 d-flex align-items-center">
                  <label for="" class="mr-1">Auto</label>
                  <input id="" v-model="isAuto.h" type="checkbox" name="" @change="pickAuto('h')">
                </div>
                <div class="col-3 d-flex align-items-center">
                  <label for="" class="mr-1 mb-0">Full</label>
                  <input id="" v-model="isFull.h" type="checkbox" name="" @change="pickFull('hf')">
                </div>
              </div>
              <input
                id=""
                v-model="boxSetting.h"
                :disabled="isAuto.h"
                type="number"
                class="form-control"
                name="z-indexID"
                aria-describedby="helpId"
                placeholder=""
                @change="onChange('h')"
              >
            </div>

            <div class="form-group">
              <label for=""><h5>Color</h5></label>
              <input
                id="head"
                v-model="boxSetting.color"
                type="color"
                name="head"
                class="form-control"
                @change="pickColor"
              >
            </div>
            
            <div class="form-group">
              <label for=""><h5>z</h5></label>
              <input
                id=""
                v-model="boxSetting.x"
                type="number"
                class="form-control"
                name="z-indexID"
                aria-describedby="helpId"
                placeholder=""
                @change="onChange('h')"
              >
            </div>
           
            <div class="form-group">
              <label for=""><h5>y</h5></label>
              <input
                id=""
                v-model="boxSetting.y"
                type="number"
                class="form-control"
                name="z-indexID"
                aria-describedby="helpId"
                placeholder=""
                @change="onChange('h')"
              >
            </div>
           
            <div class="form-group">
              <label for=""><h5>z</h5></label>
              <input
                id="z-indexID"
                v-model="boxSetting.z"
                type="number"
                class="form-control"
                name="z-indexID"
                aria-describedby="helpId"
                placeholder=""
                @change="onChange('z')"
              >
            </div>
            
            <div class="form-group">
              <label for=""><h5>Background img</h5></label>
              <button class="w-100 btn-outline-primary" @click="openFolderImg">
                Import IMG
              </button>
              <img
                v-if="boxSetting.bg"
                class="setting-box-img"
                :src="boxSetting.bg"
                alt=""
              >
              <input
                id="file"
                ref="btnLoadImg"
                type="file"
                accept="image/*"
                name="image"
                class="border d-none"
                @change="loadFile($event)"
              >
            </div>
            <small id="helpId" class="form-text text-muted">Develop XB</small>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
 components:{VueDraggableResizable},
 props: {
    x: {
      type: Number, 
      default : 0
    },
    y: {
      type: Number, 
      default : 0
    },
    z: {
      type: Number, 
      default : 0
    },
    w: {
      type: [Number, String], 
      default: 'auto'
    },
    h: {
      type: [Number, String], 
      default : 'auto'
    },
    classList: {
      type: [String, Array], 
      default : ''
    },
    reSizeText: {
      type: Object, 
      default : ()=> {}
    },
    reSizeObject: {
      type: Object, 
      default : ()=> {}
    },
 },
 data() {
   return {
     isAuto: {
       w: false,
       h: false
     },
     isFull : {
       w: false,
       h: false
     },
     sizeAuto: {
       w: 0,
       h: 0
     },
     handles: [],
     resizable: true,
     isActice: false,
     isBorder: true,
     idActive: null,
     isShowSetting: true,
     settingShow:false,
    draging:false,
     key:null,
     heightDrag: 'auto',
     widthDrag: 'auto',
     heightDragPx: null,
     widthDragPx: null,
     option: {
       x: null,
       y: null,
       z: null,
       w: null,
       h: null,
     },
    boxSetting: {
      x: null,
      y: null,
      z: null,
      w: null,
      h: null,
      color: '#ffffff',
      bg:'',
    },
    maxSize: {
      w: 0,
      h: 0
    }
   }
 },
 watch: {
   '$store.state.dragable.isSetting': {
        // immediate: true,
        deep: true,
        handler(val) {
           // update locally relevant data
          console.log(val)
          if(!val) this.closeSetting()
        }
     },
     reSizeText(val){
        console.log(val)
        this.sizeAuto = {...val}
        this.setSizeAuto(true)
     },
     reSizeObject(val){
        this.sizeAuto = {...val}
        this.setSizeAuto(true)
         console.log(this.sizeAuto)
     }
 },
 
  mounted() {
   this.maxSize = {
     w: window.innerWidth,
     h: window.innerHeight
   }
  this.option = {
    ...this.option,
    ...{x: this.x},
    ...{y: this.y},
    ...{z: this.z},
    ...{w: this.w || 'auto'},
    ...{h: this.h || 'auto' },
  }
    
  this.isAuto.w = this.option.w === 'auto' 
  this.isAuto.h = this.option.h === 'auto' 
 
  this.pickAuto()

   setTimeout(()=> {
     this.sizeAuto = this.getSizeAuto('slotElm')
   }, 0)
    this.randomProperty()
 },
 methods: {
  randomProperty() {
    this.key = Math.random().toString(36).substr(2, 3) + "-" + Math.random().toString(36).substr(2, 3) + "-" + Math.random().toString(36).substr(2, 4)
  },
  changeAttrRefDrag(attr, value){
     this.$refs.slotElm[attr] = value || 0
  },
  onChange(payload){
    const size = {
        w: this.widthDrag,
        h: this.heightDrag,
      }
    switch (payload) {
      case 'h':
        this.option.h = parseInt(this.boxSetting.h)
        size.h=this.option.h
        break
      case 'w':
       
          this.option.w = parseInt(this.boxSetting.w)
          size.w=this.option.w
        break
      case 'x':
        this.x = parseInt(this.widthDragPx)
        size.w=this.widthDrag
        console.log(this.widthDragPx)
        break
      default:
        break
    }
      this.$emit('size', size)
  },
  onDrag(left, top) {
    this.isBorder = false
  },
  onDragStart(){
    //  this.option.w =  this.option.w -10
  },
  onDragStop(x,y){
   console.log(this.$store.state.dragable.size)
    this.isBorder = true
    //  this.option.w =  this.option.w +10
  },
  onResize(left, top, width, height) {
    
    if( !this.isAuto.w) {
      this.option.w = parseInt(width)
        this.boxSetting.w = parseInt(width)
    }
    if( !this.isAuto.h) {
      this.option.h = parseInt(height)
      this.boxSetting.h = parseInt(height)
    }
     const size = {
      w: width,
      h: height,
    }
    this.$emit('size', size)
  },
  onResizeStart(e) {
     this.isBorder = false
    console.log(e)
    const rsw = ['tl', 'tr', 'mr', 'ml', 'br', 'bl']
    const rsh = ['tl', 'tr', 'tm', 'bm', 'br', 'bl']
    if (e.includes(rsw)) {
      // this.isAuto.w = false
      console.log(e)
    }
    if (e.includes(rsh)) {
      // this.isAuto.w = false
      console.log(e)
    }
    // this.pickAuto()
  },
  
  onResizeStop(left, top, width, height) {
     this.isBorder = true
  },
  onDragCallback(x,y){
      // if(x < 0 || y < 0 || x + this.option.w > this.maxSize.w || x + this.option.w > this.maxSize.w) return false
  },
  openSetting(id){
    const store = this.$store.state.dragable.isSetting
    if(!store) {
      this.$store.dispatch('dragable/setIsSetting', true)
      this.isActice = true
      this.idActive = id
    }
    else {
       this.$store.dispatch('dragable/setIsSetting', false)
    }
  },
  closeSetting(id) {
    this.isActice = false
    this.settingShow = false
    this.idActive = null
    // this.$store.dispatch('dragable/setIsSetting',  this.isActice)
    this.$nextTick(()=>{
          // this.$store.dispatch('dragable/setIsSetting',  this.isActice)

    })
  },
  getSizeAuto(refs){
    console.log(this.$refs)
    const size = {
      w: this.$refs[refs].$el.clientWidth,
      h: this.$refs[refs].$el.clientHeight
    }
     return size
  },
  setSizeAuto(type){
    if (this.option.w === 'auto' && this.option.h === 'auto'){
      this.option.w = this.sizeAuto.w
      this.option.h = this.sizeAuto.h
    }
    if(type&&this.isAuto.w){
      this.option.w = this.sizeAuto.w
      console.log(this.sizeAuto.w)
    }
  },
  cutPointResize(direct,array){
      if(this.isAuto[direct]){
        this.option[direct] = this.sizeAuto[direct]
        if(this.handles.length === 8) {
          this.handles.splice(this.handles.indexOf('tl'), 4)
        }
        if(this.handles.includes(array[0])){
          this.handles.splice(this.handles.indexOf(array[0]), array.length)
        }
      }
      else {
        this.setSizeAuto()
        this.handles = this.handles.length? array : [...this.handles, ...array]
      } 
  },
  pickFull(e){
  
    if(e==='wf'&& this.isFull.w){
      this.option.w = this.maxSize.w
      this.option.x = 0
      this.changeAttrRefDrag('left')
    }
    if(e==='hf'){
      this.option.h = this.maxSize.h
      this.option.y = 0
      this.changeAttrRefDrag('top')
    }
    this.$emit('size', this.option)
  },
  pickAuto(e){
    console.log(this.getSizeAuto('slotElm'))
    this.boxSetting.w = this.isAuto.w ? null : this.getSizeAuto('slotElm').w
    this.boxSetting.h = this.isAuto.h ? null : this.getSizeAuto('slotElm').h
    if(e==='w'){
      this.cutPointResize(e, ['mr', 'ml'])
    }
    if(e==='h'){
      this.cutPointResize(e, ['tm', 'bm'])
    }
    if (!this.isAuto.h && !this.isAuto.w) {
      this.handles = ['tl','bl','tr','br','mr','ml','tm','bm']
    }
    if (this.isAuto.h && this.isAuto.w) this.handles = [] 
  },
  pickColor(){
    this.$emit('style', this.boxSetting)
  },
  mouseover(e){
    this.isShowSetting = true
    this.isBorder = false
  },
  mouseleave(e){
    this.isShowSetting = false
    this.isBorder = true
  },
  openFolderImg(){
    this.$refs.btnLoadImg.click()
  },
  loadFile(file){
    this.boxSetting.bg = URL.createObjectURL(file.target.files[0])
    console.log(this.boxSetting)
    this.$emit('style', this.boxSetting)
  }
 },
}
</script>

<style >
.my-class1 {
  border: none !important;
}
.style {
  /* border-radius: 50%; */
  overflow: hidden;
}
.hiden {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.imgIcon {
  width: 50px;
  height: 50px;
}
.optionTopIn {
  position: absolute;
  top: 0;
  right: 0;
}
.optionTop {
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 9999;
}
.optionTop.optionFixed {
  opacity: 0;
  transition: 0.4s ease-in;
}
.optionTop.optionFixed.active {
  opacity: 1;
  transition: 0.4s 0.2s ease-in;
}
.tool-list {
  width: 0;
  opacity: 0;
  transition: 0.4s ease-in;
}
.tool-list.active {
  /* width: 16px; */
  opacity: 1;
  transition: 0.4s 0.2s ease-in;
}
.option-tool {
  height: 16px;
  width: 0px;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in;
}

.option-tool.active {
  width: 300px;
  height: 16px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: 0.4s ease-in;
}
.optionBox {
  background-color: black;
  padding: 6px;
  border-radius: 0 0 0 50%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.2s ease-out;
}

.optionBox:hover {
  background-color: black;
  padding: 8px;
  border-radius: 0 0 0 50%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.2s ease-in;
}
.optionBoxFix {
  background-color: black;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.optionBox .font-awesome-icon {
  cursor: pointer;
}
.icon-setting {
  width: 0.1px;
  height: 0.1px;
  color: #000;
  transition: 0.2s ease-out;
}
.optionBox:hover .icon-setting {
  width: 16px;
  height: 16px;
  color: #fff;
  transition: 0.2s ease-out;
}
.setting-box.setting-box-active {
  position: fixed;
  top: 50px;
  right: 20px;
  height: 200px;
  width: 335px;
}
.setting-box {
  position: absolute;
  top: 38px;
  right: 2px;
  height: 0;
  width: 0;
  z-index: 9999;
}
.setting-box * {
  display: none;
}
.setting-box-img {
  width: 100%;
  height: 100px;
  object-fit: cover;
}
.setting-box.setting-box-active * {
  display: block;
}
.list-group .list-group-item {
  /* background-color: #95a3bf; */
  /* color: #fff; */
}
</style>