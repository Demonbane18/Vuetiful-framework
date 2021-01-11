<template>
<!-- add right, shift or alt modifier to button -->
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>   
  </div>
 <button @click.alt="toggleModal">open modal (alt)</button>
</template> 

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My First Vue App!',
      header: 'Sign up for the Giveaway',
      text: '$100 prize!',
      showModal: false
    }
  }, 
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
/* scope will destroy #app style */
/* create global style sheets */
/* override global style on Modal.vue */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* added h1 style */
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
