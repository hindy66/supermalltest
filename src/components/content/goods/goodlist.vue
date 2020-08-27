<template>
  <div class="goodlist">
    <gooditem v-for="item in goods" :gooditem="item"></gooditem>
  </div>
</template>

<script>
import gooditem from './gooditem'
export default {
  name:"goodlist",
  components:{
    gooditem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {

  },
}
</script>

<style>
 .goodlist{
   display: flex;
   justify-content:space-between;
   flex-wrap: wrap;
   padding:2px;
 }
</style>
