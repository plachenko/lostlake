<template>
  <div id="app">
      <div id="content">
        <div id="inner" ref="inner">

          <div id="nav">
            <ul>
              <li><a href="#test">Team.</a></li>
              <li><a href="#test">Experience.</a></li>
              <li><a href="#test">Imagination.</a></li>
              <li><a href="#test">Contact.</a></li>
            </ul>
          </div>

          <div class="block brg" style="z-index: 9998;">
            <div id="logoContainer">
              <img src="./assets/LostLake/logo_center.png" alt="" />
              <div class="test">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="block mtn"></div>
          <div class="block" id="test">
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
          <h2>Team of Experienced developers.</h2>
          <div class="profile">
            <div class="img"></div>
            <span class="name"></span>
            <p class="blurb"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'App',
  mounted(){
    /*
      gsap.to('.test', 1, {transform: "rotate(90deg)", autoAlpha: 0, onComplete:()=>{
        gsap.to('.brg', .6, {opacity: 0});
        gsap.to('.mtn', .6, {opacity: 1});
      }});
    */
    this.$refs['inner'].addEventListener('scroll', (e) => {
      e.preventDefault();
      let st = e.target.scrollTop;
      if(st < 3){
        gsap.to('.test', 0, {transform: "rotate(0deg)"});
        gsap.to('.test', .4, {autoAlpha: 1});
        gsap.to('.brg', 1, {autoAlpha: 1});
        gsap.to('#nav', .6, {backgroundColor: "rgba(0,0,0,0)"});
      }else{
        if(st > window.innerHeight * 1.3){
          gsap.to('#logoContainer', .3, {autoAlpha: 0});
        } else if(st < window.innerHeight * 1.3){
          gsap.to('#logoContainer', .3, {autoAlpha: 1});

        }
        gsap.to('.test', .5, {transform: "rotate(90deg)", autoAlpha: 0});
        gsap.to('#nav', .5, {backgroundColor: "rgba(0,0,0,.5)"});
        // gsap.to('.brg', .4, {autoAlpha: 0});

        return false;
      }
    })
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

#app{
  display: flex;
  height: 100%;
  width: 100%;
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  }

   .mtn{
    background: url('./assets/LostLake/mtns.png') no-repeat center center;
    }
  .brg{
    background: url('./assets/LostLake/bridge.jpg') no-repeat center center;
    }

  #content{
    background-color:#000;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    }
    #inner{
      position: relative;
      overflow-y: scroll;
      margin-right: -15px;
      }

  #nav {
    z-index: 9999;
    position:fixed;
    right: 0px;
    top:0px;
    font-size: 20px;
    width: 100%;
    }
    #nav ul {
      display: block;
      position: relative;
      float: right;
    }
    #nav li{
      display: inline-block;
      }
      #nav a{
        text-decoration: none;
        color:#FFF;
        padding: 20px;
        display: inline-block;
        }
      #nav a:hover{
        /* color: #AAA; */
        }

  #top div{
    position: absolute;
    }
  #top .current{
    opacity: 1;
    }

  .block{
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 550px;
    }

  #logoContainer{
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

    .block h2{
      color:#FFF;
      font-size: 6vw;
      }

    .profile{
      background-color:#F00;
      height: 100px;
      width: 100px;
    }
</style>
