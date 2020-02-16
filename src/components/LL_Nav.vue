<template>
  <nav >
    <!-- <img src="../assets/LostLake/logo_center2.png" v-if="logo" /> -->
    <ul>
      <li :id="l+'lnk'" v-for="(l, k) in links" :key=k>
        <div class="border top" />
        <div class="border bot" />
        <a  :href="'#'+l">{{l | capitalize}}.</a>
      </li>
      <!-- <li v-for="(l, k) in links" :key=k><llink :href="'#'+l">{{l | capitalize}}.</llink></li> -->
    </ul>
  </nav>
</template>
<script>
// import gsap from 'gsap';
// import llogo from './LL_Logo.vue';
// import llink from './LL_Link.vue';
export default {
  components: {
    // llink
    // llogo
  },
  props: {
    logo:{
      type: Boolean,
      default: false
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  data: function(){
    return{
      links: [
        'team',
        'experience',
        'imagination',
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
    width: 10px;
    position: absolute;
    opacity: 0;
  }
  .bot{
    border-right: 2px solid;
    border-bottom: 2px solid;
    bottom: 5px;
    right: 5px;
    }
  .top{
    border-left: 2px solid;
    border-top: 2px solid;
    left: 5px;
    top: 5px;
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
      width: 70px;
      position: absolute;
      top: 10px;
      left: 150px;
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
