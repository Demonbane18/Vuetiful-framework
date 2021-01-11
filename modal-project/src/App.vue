<template>
  <h1>{{ title }}</h1>
  <!-- add prop -->
  <!-- <Modal header="Sign up for the Giveaway" text="$100 prize!"/> -->
  <!-- use data bind instead -->
  <!-- add theme attribute -->
  <Modal :header="header" :text="text" theme="sale"/>    
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
      text: '$100 prize!'
    }
  }, 
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
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
