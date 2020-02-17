<template>
  <a :href="href" :target="target" :style="{color: `'${color}'`}">
    <div ref="top" class="top" :style="{color: `'${color}'`}"></div>
    <div ref="bot" class="bot" :style="{color: `'${color}'`}"></div>
    <span>
      <slot />
    </span>
  </a>
</template>
<script>
import gsap from 'gsap';

export default {
  name: 'llink',
  props:{
    color: {
      type: String,
      default: 'rgb(255, 255, 255)'
    },
    target: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: '#'
    }
  },
  data: function(){
    return {
      out: false
    }
  },
  mounted(){
    this.$el.addEventListener('mouseout', () => {
      this.out = true;
      if(this.out){
        gsap.to(this.$refs['top'], .2 , {opacity: 0});
        gsap.to(this.$refs['bot'], .2 , {opacity: 0});
      }
    })

    this.$el.addEventListener('mouseenter', () => {
      this.out = false;
      if(!this.out){
        gsap.from(this.$refs['top'], .2,  {left: '-20'});
        gsap.from(this.$refs['bot'], .2, {right: '-20'});
        gsap.to(this.$refs['top'], .2,  {opacity: 1});
        gsap.to(this.$refs['bot'], .2,  {opacity: 1});
      }
    })
  }
}
</script>
<style scoped>
a {
  /* display: inline-block; */
  display: inline;
  color:#FFF;
  overflow-wrap: break-word;
  /* margin: 0 10px; */
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  }
  a div{
    width: 40px;
    height: 20px;
    box-sizing: border-box;
    /* color:#FFF; */
    position: absolute;
    opacity: 0;
    }
  .top{
    left: -10px;
    top: -5px;
    border-left: solid;
    border-top: solid;
    }
  .bot{
    right: -10px;
    bottom: -5px;
    border-right: solid;
    border-bottom: solid;
    margin-top: auto;
    margin-left: auto;
    }
</style>
