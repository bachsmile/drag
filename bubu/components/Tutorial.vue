<!-- Please remove this file from your project -->
<template>
  <div>
    <drag-drop />
  </div>
</template>

<script>
import dragDrop from './pages/dragDrop.vue'
export default {
  name: 'NuxtTutorial',
  components: { dragDrop },
  head() {
    return {
      title: 'hello',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ]
    }
  }
}
</script>
