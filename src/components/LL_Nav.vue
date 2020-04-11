<template>
  <nav >
  <!-- <img @click="scrollEvt" v-show="logo" id="logoImg" src="../assets/LostLake/logo_center2.png" /> -->
    <ul>
      <li :id="l+'lnk'" v-for="(l, k) in links" :key=k>
        <div class="border top" />
        <div class="border bot" />
        <a  :href="'#'+l">{{l | capitalize}}</a>
      </li>
      <!-- <li v-for="(l, k) in links" :key=k><llink :href="'#'+l">{{l | capitalize}}.</llink></li> -->
    </ul>
  </nav>
</template>
<script>
import gsap from 'gsap';
export default {
  props: {
    logo:{
      type: Boolean,
      default: false
    }
  },
  watch: {
    logo(val){
      if(val){
        gsap.to('#logoImg', .3, {opacity: 1, paddingLeft: 0})
      }else{
        gsap.to('#logoImg', .3, {opacity: 0, paddingLeft: 10})
      }
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods:{
    scrollEvt(){
      this.$emit('scrollUp');
    }
  },
  data: function(){
    return{
      links: [
        'imagination',
        'team',
        'experience',
        'contact'
      ]
    }
  }
}
</script>
<style scope>
  .border{
    color:#FFF;
    height: 10px;
    width: 20px;
    position: absolute;
    opacity: 0;
  }
  .bot{
    border-right: 2px solid;
    border-bottom: 2px solid;
    right: 8px;
    bottom: 8px;
    }
  .top{
    border-left: 2px solid;
    border-top: 2px solid;
    left: 8px;
    top: 8px;
    }
  nav {
    z-index: 9999;
    position: fixed;
    top:0px;
    right: 17px;
    width: 100%;
    padding: 25px 10px 25px 0px;
    font-family: 'inputSerif';
    font-weight: bold;
    font-size: 1em;
    }
    nav img{
      /* opacity: 0; */
      width: 70px;
      position: absolute;
      top: 10px;
      cursor: pointer;
      left: 150px;
      padding-left: 10px;
    }
    nav ul {
      display: block;
      position: relative;
      float: right;
      }
      nav li{
        display: inline-block;
        position: relative;
        }
      nav a{
        text-decoration: none;
        color:#FFF;
        padding: 10px 15px 10px 15px;
        display: inline-block;
        }
</style>
