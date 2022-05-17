<template>
  <div class="draggable-common">
    <vue-draggable-resizable
      ref="slotElm"
      :key="key"
      :w="option.w"
      :h="option.h"
      :x="option.x" 
      :y="option.y"
      :z="z"
      class="my-class1"
      @resizing="onResize"
      @dragging="onDrag"
      @dragstop="onDragStop"
      @resizestop="onResizeStop"
    >
      <div class="style">
        <slot class="w-100 h-100 hiden"></slot>
      </div>
      <div class="optionTopIn">
        <div class="optionBox">
          <font-awesome-icon class="font-awesome-icon" :icon="['fas', 'tools']" inverse @click="openSetting(key)" />
        </div>
      </div>
    </vue-draggable-resizable>
    <div class="optionTop optionFixed" :class="{'active':isActice}">
      <div class="optionBox">
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
           
            <label for="">Width</label>
            <div class="row d-flex">
              <div class="col-9">
                <input
                  id=""
                  v-model="input.w"
                  :disabled="isAuto.w"
                  type="number"
                  class="form-control"
                  name="z-indexID"
                  aria-describedby="helpId"
                  placeholder=""
                  @change="onChange('w')"
                >
              </div>
              <div class="col-3 d-flex align-items-center">
                <label for="" class="mr-1">Auto</label>
                <input id="" v-model="isAuto.w" type="checkbox" name="" @change="pickAuto">
              </div>
            </div>
            <label for="">Height</label>
            <div class="row d-flex">
              <div class="col-9">
                <input
                  id=""
                  v-model="input.h"
                  :disabled="isAuto.h"
                  type="number"
                  class="form-control"
                  name="z-indexID"
                  aria-describedby="helpId"
                  placeholder=""
                  @change="onChange('h')"
                >
              </div>
              <div class="col-3 d-flex align-items-center">
                <label for="" class="mr-1">Auto</label>
                <input id="" v-model="isAuto.h" type="checkbox" name="" @change="pickAuto">
              </div>
            </div>
            <label for="">x</label>
            <input
              id=""
              v-model="input.x"
              type="number"
              class="form-control"
              name="z-indexID"
              aria-describedby="helpId"
              placeholder=""
              @change="onChange('h')"
            >
            <label for="">y</label>
            <input
              id=""
              v-model="input.y"
              type="number"
              class="form-control"
              name="z-indexID"
              aria-describedby="helpId"
              placeholder=""
              @change="onChange('h')"
            >
            <label for="">z</label>
            <input
              id="z-indexID"
              v-model="input.z"
              type="number"
              class="form-control"
              name="z-indexID"
              aria-describedby="helpId"
              placeholder=""
              @change="onChange('z')"
            >
            <small id="helpId" class="form-text text-muted">Help text</small>
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
 },
 data() {
   return {
     isAuto: {
       w: false,
       h: false
     },
     isActice: false,
     idActive: null,
     settingShow:false,
     key:null,
     heightDrag: 'auto',
     widthDrag: 'auto',
     heightDragPx: null,
     widthDragPx: null,
     option: {
       x: 0,
       y: 0,
       z: 0,
       w: null,
       h: null,
     },
      input: {
        x: 0,
        y: 0,
        z: 0,
        w: null,
        h: null,
      }
   }
 },
  computed: {
    
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
    option: {
      deep: true,
      handler(val) {
          // this.input = {...this.option}
          console.log(val)
        }
    }
 },
 mounted() {
   console.log(this.w)
  this.option = {
    ...this.option,
    ...{x: this.x},
    ...{y: this.y},
    ...{z: this.z},
    ...{w: this.w || 'auto'},
    ...{h: this.h || 'auto' },
  }
  // this.input = {...this.option}
  this.isAuto.w = this.option.w === 'auto' 
  this.isAuto.h = this.option.h === 'auto' 
  console.log(this.$slots.default[0])
  console.log(this.option)
  //  console.log(this.$refs.tag1.changeHeight)
  //  console.log(this.$slots.default[0].elm.clientHeight)
  //  console.log(this.$slots.default[0].elm.clientWidth)
   this.heightDragPx = this.$slots.default?.[0].elm.clientHeight
   this.widthDragPx = this.$slots.default?.[0].elm.clientWidth
   if ( !this.$slots.default?.[0]) {
     this.heightDrag = 250
     this.widthDrag = 100
   }
   const a = 'a(90degde922220degr'
   const reg = /(\d+)deg/img
   const reg1 = /deg/img
   const res = a.match(reg)
   console.log(res)
   res.forEach((item, id) => {
     res[id] = item.replace(reg1,'')
   })
   console.log(res )
   console.log(this.$store.state.dragable.isSetting )
   let st = '{getThis}'
    st = st.replace(/\{|\}/gi,'') // "getThis"
    this.randomProperty()
 },
 methods: {
     randomProperty() {
     this.key = Math.random().toString(36).substr(2, 3) + "-" + Math.random().toString(36).substr(2, 3) + "-" + Math.random().toString(36).substr(2, 4)
   },
   onChange(payload){
     console.log(this.z)
    //  this.randomProperty()
      console.log(payload)
      const size = {
          w: this.widthDrag,
          h: this.heightDrag,
        }
      switch (payload) {
        case 'h':
         
           this.option.h = parseInt(this.input.h)
           size.h=this.option.h
          
          break
        case 'w':
            if(this.isAuto.w) {
              this.option.w = 'auto' 
            }
            else {
              this.option.w = parseInt(this.input.w)
            }
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
  //   this.x = left
  //   this.y = top
  //   const size = {
  //     x: this.x,
  //     y: this.y
  //  }
  //  this.$store.dispatch('dragable/setSize', size)
  //  console.log(this.$store.state.dragable.size)
  //   console.log(this.x , this.y , this.w , this.h )
  this.$store.dispatch('dragable/setIsSetting', false)
  },
  onDragStop(x,y){
    this.x = x
    this.y = y
    const size = {
      x: this.x,
      y: this.y
    }
   this.$store.dispatch('dragable/setSize', size)
   console.log(this.$store.state.dragable.size)
  },
  onResize(left, top, width, height) {
    
    // this.x = left
    // this.y = top
    // this.w = width
    // this.h = height
    // console.log(this.x , this.y , this.w , this.h )
      // this.heightDragPx = parseInt(height)
      // this.widthDragPx = parseInt(width)
    //  this.option.w = this.getSizeAuto('slotElm').w
    //   console.log(this.getSizeAuto('slotElm').w)
      // if( this.isAuto.w) {
        
      //   this.isAuto.w = false
      //   this.option.w = this.getSizeAuto('slotElm').w
      //   this.option.h = this.getSizeAuto('slotElm').h
      //   return 
      // }
      // this.option.w = parseInt(width)
      // this.option.h = parseInt(height)
    //  this.heightDrag = parseInt(this.heightDragPx)
    //  this.widthDrag = parseInt(this.widthDragPx)
    const size = {
      w: width,
      h: height,
    }
    this.$emit('size', size)
    // this.$refs.tag1.height  = this.$slots.default[0].elm.clientHeight
  },
  onResizeStop(left, top, width, height) {
    // this.option.w = width
    // this.option.h = height
    //   const size = {
    //   w: this.option.w,
    //   h: this.option.h
    // }
  // this.heightDrag = this.$slots.default[0].elm.clientHeight
    // this.$store.dispatch('dragable/setSize', size)
    console.log(this.$store.state.dragable.size)
  },
  openSetting(id){
    console.log(id)
    const store = this.$store.state.dragable.isSetting
    if(!store) {
      this.$store.dispatch('dragable/setIsSetting', true)
      this.isActice = true
    }
    else {
       this.$store.dispatch('dragable/setIsSetting', false)
    }
    // if (!this.isActice) {
    //   // this.isActice = true
    //   this.$store.dispatch('dragable/setIsSetting', true)
    //   this.idActive = id
    //   return
    // }
      // this.closeSetting(id)
  },
  closeSetting(id) {
    this.isActice = false
    this.settingShow = false
    // this.$store.dispatch('dragable/setIsSetting',  this.isActice)
    this.idActive = null
  },
  getSizeAuto(refs){
    const size = {
      w: this.$refs[refs].$el.clientWidth,
      h: this.$refs[refs].$el.clientHeight
    }
     return size
  },
  pickAuto(e){
    console.log(this.input)
    console.log(this.$refs)
    console.log(this.getSizeAuto('slotElm'))
    this.input.w = this.isAuto.w ? null : 0
    this.input.h = this.isAuto.h ? null : 0
    this.option.w = this.isAuto.w ? 'auto': this.getSizeAuto('slotElm')
    this.option.h = this.isAuto.h ? 'auto': this.getSizeAuto('slotElm')
  }
 },
}
</script>

<!-- <style >
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
  top: 2px;
  right: 2px;
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
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.optionBox .font-awesome-icon {
  cursor: pointer;
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
.setting-box.setting-box-active * {
  display: block;
}
.list-group .list-group-item {
  /* background-color: gray;
  color: #fff; */
}
</style> -->