<template>
  <div>
    <div class="style-box">
      <div class="row m-0">
        <div v-for="(item, index) in listOption" :key="index" class="col-3 box">
          <div :id="`index${item.typeId}`" class="box-item" draggable="true" @dragstart="drag($event, item)">
            {{ item.type }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      listOption:[
        {
          typeId: 0,
          type: 'text',
          component: 'TextEditDrag',
          title: 'textA',
          position: {
            x: 100,
            y: 100
          },
          size: {
            w: 'auto',
            h: 'auto'
          }
        },
        {
          typeId: 1,
          type: 'card',
          component: 'CardDrag',
          title: 'card',
          position: {
            x: 100,
            y: 100
          },
          size: {
            w: 'auto',
            h: 'auto'
          }
        },
        {
          typeId: 2,
          type: 'ImageDrag',
          component: 'ImageDrag',
          title: 'ImageDrag',
          position: {
            x: 100,
            y: 100
          },
          size: {
            w: 'auto',
            h: 'auto'
          }
        }
      ]
    }
  },
methods: {
  drag(e, item){
    e.dataTransfer.setData("text", JSON.stringify(item))
    const data = e.dataTransfer.getData("text")
    console.log(data)
  },
  dragover(e){
    console.log(e)
  },
  drops(e){
     e.preventDefault()
    const data = e.dataTransfer.getData("text")
      console.log(data)
  },
  allowDrop(e){
     e.preventDefault()
    const data = e.dataTransfer.getData("text")
      console.log(data)
  }
},
}
</script>

<style>
.style-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: #008dad;
}
.box {
  padding: 5px;
}
.box-item {
  background-color: #fff;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.are {
  width: 500px;
  height: 500px;
  background-color: black;
}
</style>