<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'tabbar'

}
</script>

<style>
  #tabbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: #eeeeee;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
  }

</style>
