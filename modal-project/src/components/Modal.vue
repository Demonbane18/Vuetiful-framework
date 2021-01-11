<template>
<!-- added Modal header -->
<div class="backdrop">
    <div class="modal">
        <h1>Modal Title</h1>
        <p>modal content</p>
    </div>
</div>
</template>

<style scoped>
/* added h1 style */
/* 1.introduce scoped style */
/* 2.make selector more specific */
/* 3. use scope in App.vue, introduce global styles */
  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  /* h1 {
      color: aqua;
      border: none;
      padding:0;
  } */
.modal h1 {
    color: aqua;
    border: none;
    padding:0;
  }
  /* add modal p to override italic on global css */
.modal p {
    font-style: normal;
}
</style>