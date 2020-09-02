<template>
  <div class="toast" v-if="isShow">
    <div class="content">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name:"toast",
  data() {
    return {
      message:'',
      isShow:false
    }
  },
  methods: {
    show(message,delay = 1500){
      this.message = message
      this.isShow = true
      let that = this
      setTimeout(function(){
        that.isShow = false
      },delay)
    }
 },
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    color: white;
    z-index: 999;
  }
</style>
