<template>
<!-- add header and text prop -->
<div class="backdrop">
    <!-- data bind class when theme is created -->
    <div class="modal" :class="{sale: theme === 'sale'}">
        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
    </div>
</div>
</template>

<script>
export default {
    props: ['header', 'text', 'theme']
}
</script>

<style>
/* added modal sale and sale h1 */
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

.modal h1 {
    color: aqua;
    border: none;
    padding:0;
  }

.modal p {
    font-style: normal;
}
.modal.sale {
    background: crimson;
    color: white;
}
.modal.sale h1 {
    color: white;
}
</style>