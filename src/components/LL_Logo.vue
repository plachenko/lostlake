<template>
  <div id="logoContainer">
    <img src="../assets/LostLake/logo_center.png" alt="" />
    <div class="test">
      <div class="top"></div>
      <div class="bot"></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'llogo',
  props: {
    rot: {
      type: Number,
      default: 0
    }
  },
  watch: {
    rot: function(val){
      /*
      if(!val){
        gsap.to('.top', .3, {height: '20%', width:'70%'})
        gsap.to('.bot', .3, {height: '20%', width:'70%'})
      } else {
        gsap.to('.top', .3, {height: 100, width:100});
        gsap.to('.bot', .3, {height: 100, width:100});
      }
      */
      gsap.to('.test', .3, {transform: "rotate("+val+"deg)"});
    }
  },
  mounted(){
    gsap.from('img', 1, {autoAlpha:0, delay: .3});
    gsap.from('.top', .5, {width: 0, height: 0})
    gsap.from('.bot', .5, {width: 0, height: 0})
  }
}
</script>

<style scoped>
#logoContainer {
z-index: 9998;
align-self: center;
position: sticky;
width: 350px;
height: 350px;
top: 350px;
margin-bottom: 100px;
}
  .test {
  display: flex;
  height: 100%;
  flex-direction: column;
  position: relative;
  }
  img {
  z-index: 9999;
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 80px 0px 0px 50px;
  }
  .test div {
    width: 70%;
    height: 20%;
    color:#FFF;
    border-width: 8px !important;
    box-sizing: border-box;
    cursor: pointer;
    }
  .test div:first-child {
    border-left: solid;
    border-top: solid;
    }
  .test div:last-child {
    border-right: solid;
    border-bottom: solid;
    margin-top: auto;
    margin-left: auto;
    }
</style>
