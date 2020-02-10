<template>
  <div id="app">

    <!--
    <div style="overflow-y: scroll; height: 400px; width: 500px;">
      <div style="height: 1600px; width: 100%;">
        <div style='height: 10px'></div>
        <div style="background-color:#F00; height: 100px; width:100%; top: 0px; position: sticky;"></div>
      </div>
    </div>
    -->

    <nav>
      <ul>
        <li><a href="#test">Team.</a></li>
        <li><a href="#test">Experience.</a></li>
        <li><a href="#test">Imagination.</a></li>
        <li><a href="#test">Contact.</a></li>
      </ul>
    </nav>

    <div id="content" ref="inner">
      <div class="block">
        <div id="logoContainer">
          <img src="./assets/LostLake/logo_center.png" alt="" />
          <div class="test">
            <div class="top"></div>
            <div class="bot"></div>
          </div>
        </div>
        <div class="brg"></div>
        <div class="mtn"></div>
      </div>
      <div class="block">
        <p class="cta_copy">Lorem ipsum dolor sit amet, consectetur
    adipising. We are a <a href="#">team of experiences
    developers</a> Quisque congue ut leo quis
    vulputate. Sed convallis orci id pharetra
    luctus. <a href="#">proven track record of creating
    legendary experiences</a> Curabitur
    consectetur tincidunt sapien non egestas.
    In ullamcorper lectus non nisl commodo,
    in ullamcorper arcu rutrum <a href="#">imagination</a>
    Etiam mattis ullamcorper dui. Aliquam
    erat volutpat, <a href="#">join us</a> oCras condimentum
    velit eget dui.</p>
      </div>
      <div class="block">
      </div>
      <div class="block">
      </div>
      <div class="block">
      </div>
    </div>

  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'App',
  mounted(){
    this.$refs['inner'].addEventListener('scroll', (e) => {
      e.preventDefault();
      let st = e.target.scrollTop;
      if(st < 3){
        gsap.to('.brg', .4, {autoAlpha: 1});

        // gsap.to('.top', .3, {height: '20%', width:'70%'})
        // gsap.to('.bot', .3, {height: '20%', width:'70%'})
        gsap.to('.test', .4, {transform: "rotate(0deg)"});

        /*
        gsap.to('.test', .4, {autoAlpha: 1});
        gsap.to('.brg', 1, {autoAlpha: 1});
        */
        gsap.to('nav', .6, {backgroundColor: "rgba(0,0,0,0)"});

      }else{
        // gsap.to('.top', .3, {height: 100, width:100})
        // gsap.to('.bot', .3, {height: 100, width:100})
        gsap.to('.brg', .4, {autoAlpha: 0});
        if(st > window.innerHeight * 1.3){
          gsap.to('#logoContainer', .3, {autoAlpha: 0});
        } else if(st < window.innerHeight * 1.3){
          gsap.to('#logoContainer', .3, {autoAlpha: 1});

        }
        gsap.to('.test', .4, {transform: "rotate(45deg)"});
        gsap.to('nav', .5, {backgroundColor: "rgba(0,0,0,.5)"});
        // gsap.to('.brg', .4, {autoAlpha: 0});

        return false;
      }
    });
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
    position: relative;
    min-height: 100vh;
    width: 100%;
    background-color:#000;
    border-top: 1px solid;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
  .mtn{
    width: 100%;
    height: 100%;
    top:0px;
    position: absolute;
    z-index: 9996;
    background-size: cover !important;
    background: url('./assets/LostLake/mtns.png') no-repeat center center;
    }
  .brg{
    width: 100%;
    height: 100%;
    z-index: 9997;
    position: absolute;
    top:0px;
    background-size: cover !important;
    background: url('./assets/LostLake/bridge.jpg') no-repeat center center;
    }

    /*organize*/

    #logoContainer{
      z-index: 9998;
      align-self: center;
      position: fixed;
      width: 350px;
      height: 390px;
      }
        .test{
    display: flex;
    height: 100%;
    flex-direction: column;
    position: relative;
    }
    img{
      z-index: 9999;
      position: absolute;
      top: 10px;
      left: 10px;
      margin: 100px 0px 0px 50px;
    }
    .test div{
      width: 70%;
      height: 20%;
      color:#FFF;
      border-width: 8px !important;
      box-sizing: border-box;
      cursor: pointer;
      }
      .test div:first-child{
        border-left: solid;
        border-top: solid;
        }
      .test div:last-child{
        border-right: solid;
        border-bottom: solid;
        margin-top: auto;
        margin-left: auto;
        }
.cta_copy{
  color:#FFF;
  letter-spacing: 3px;
  font-size: 4vw;
  color: #456195;
  padding: 30px;
  }
.cta_copy a{
  color:#FFF;
}
</style>
