<template>
<!-- added Modal.vue and template -->
<div class="backdrop">
    <div class="modal">
        <p>modal content</p>
    </div>
</div>
</template>

<style>
/* added modal and backdrop styles */
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
</style>