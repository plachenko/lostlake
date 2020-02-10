<template>
  <div id="app">
    
    <!--
    <nav>
      <ul>
        <li><a href="#test">Team.</a></li>
        <li><a href="#test">Experience.</a></li>
        <li><a href="#test">Imagination.</a></li>
        <li><a href="#test">Contact.</a></li>
      </ul>
    </nav>

    <div id="top">

    </div>

    <div id="content" style="">
      <div class="block">
      </div>
      <div class="block">
      </div>
      <div class="block">
      </div>
      <div class="block">
      </div>
    </div>
    -->
  </div>
</template>

<script>
// import gsap from 'gsap';

export default {
  name: 'App',
  mounted(){

  },
  data: function(){
    return {

    }
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  }
html, body{
  height: 100%;
  width: 100%;
  }

  nav {
    z-index: 9999;
    position:fixed;
    right: 0px;
    top:0px;
    font-size: 20px;
    width: 100%;
    }
    nav ul {
      display: block;
      position: relative;
      float: right;
    }
    nav li{
      display: inline-block;
      }
      nav a{
        text-decoration: none;
        color:#FFF;
        padding: 20px;
        display: inline-block;
        }

#top{
  width: 100px;
  height: 100px;
  background-color:#00F;
  }
#app{
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  font-family: "Segoe UI", Tahoma, sans-serif;
  width: 100%;
  /* font-family: 'Roboto', 'Segoe UI', Tahoma, sans-serif; */
  }
  #content{
    overflow-y: scroll;
    margin-right: -15px;
    }
  .block{
    min-height: 100vh;
    width: 100%;
    /* min-height: 550px; */
    background-color:#F00;
    border-top: 1px solid;
    }
</style>
