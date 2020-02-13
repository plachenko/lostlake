<template>
  <a :href="href" :target="target">
    <div ref="top" class="top"></div>
    <div ref="bot" class="bot"></div>
    <span style="white-space: normal">
      <slot />
    </span>
  </a>
</template>
<script>
import gsap from 'gsap';

export default {
  name: 'llink',
  props:{
    target: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: '#'
    }
  },
  mounted(){
    this.$el.addEventListener('mouseout', () => {
      gsap.to(this.$refs['top'], .4 , {opacity: 0});
      gsap.to(this.$refs['bot'], .4 , {opacity: 0});
    })

    this.$el.addEventListener('mouseenter', () => {
      gsap.from(this.$refs['top'], .2,  {left: '-20'});
      gsap.from(this.$refs['bot'], .2, {right: '-20'});
      gsap.to(this.$refs['top'], .4,  {opacity: 1});
      gsap.to(this.$refs['bot'], .4,  {opacity: 1});
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
    color:#FFF;
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
