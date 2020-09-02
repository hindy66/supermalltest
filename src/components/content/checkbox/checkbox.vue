<template>
  <div class="checkbox"  :class="{'active':isChecked}" >
    <img src="~asset/img/shop/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:"checkbox",
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  },
  methods: {
  },
}
</script>

<style scoped>
  .checkbox{
    /* position: relative;
    top:50%;
    left: 50%;
    margin-top: -10px;
    margin-left: -10px; */
    border-radius: 50%;
    border: 2px solid #ccc;
    height: 20px;
    width: 20px;
    text-align: center;
    /* background-color: lightpink; */
    cursor: pointer;
  }
  .checkbox.active{
    background-color: #ff5777;
  }
</style>
