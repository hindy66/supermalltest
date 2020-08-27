<template>
  <div class="tabcontrol">
    <div class="tabcontrol-item" v-for="(item,index) in titles">
      <span :class="{'active':index == currentIndex}" @click="itemclick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabcontrol',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemclick(index){
      this.currentIndex = index
      this.$emit('childItemClick',index)
    }
  },
}
</script>

<style>
  .tabcontrol{
    display: flex;
    text-align: center;
    font-size: 15px;
  }

  .tabcontrol-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .tabcontrol-item span{
    padding:5px 2px;
  }

  .tabcontrol-item span.active{

    color: #eba3aa;
    border-bottom: 2px solid #eba3aa;
  }
</style>
