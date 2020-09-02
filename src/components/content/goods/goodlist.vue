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
   flex-wrap: wrap;
   justify-content: space-around;
   padding:2px;
 }
</style>
