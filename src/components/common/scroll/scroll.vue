<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"scroll",
  data() {
    return {
      bS:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    this.bS = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      click:true,
      pullUpLoad:this.pullUpLoad
    })
    this.bS.on('scroll',(position) => {
      this.$emit("scroll",position)
    })
    this.bS.on("pullingUp", () => {
      this.$emit("pullingUp")
    })
    this.$store.commit({
      type:'updateBetterScroll',
      bs:this.bS
    })
  },
  methods: {
    scrollTo(x,y,time=500){
      this.bS && this.bS.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.bS && this.bS.finishPullUp()
    },
    refresh(){
      this.bS && this.bS.refresh()
    },
    getY(){
      return this.bS ? this.bS.y : 0
    }
  },
}
</script>

<style scoped>

</style>
