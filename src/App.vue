<template>
  <div id="app">

    <llnav ref="nav" :logo="showLogo" />

    <div id="content" ref="inner">

      <!-- Above the fold -->
      <div ref="atf" class="block">
        <div class="brg"></div>
        <div id="logoCont">
          <llogo ref="logo" :rot="rot" />
          <div class="mtn"></div>
        </div>
      </div>

      <!-- Call to action copy -->
      <div id="imagination" class="block" style="padding-top: 5vw;">
        <p class="cta_copy" id="test">Lorem ipsum dolor sit amet, consectetur adipising. We are a <llink :href="'#experience'">team of developers</llink> Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. <br /><llink :href="'#team'">proven track record of experiences</llink> Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum <llink :href="'#imagination'">imagination</llink> Etiam mattis ullamcorper dui. Aliquam erat volutpat, lorem <llink :href="'#contact'">join us</llink> oCras condimentum velit eget dui.</p>
      </div>

      <!-- Team section -->
      <div id="team" class="block content">
        <div class="innercont">
          <h2>Team of experienced developers.</h2>
        </div>
        <div class="innercont">
          <llprofile v-for="(p, k) in profiles" :key="k" :profile="p" />
        </div>
      </div>

      <!-- Experience -->
      <div id="experience" class="block content">
        <div class="innercont">
          <h2>Proven track record of creating legendary experiences.</h2>
        </div>
        <div class="innercont">
          <llprofile v-for="(g, k) in experiences" :key="k" :profile="g" :game="true" :bgpos="g.bgPos" />
        </div>
        <!-- <llgame v-for="(g, k) in experiences" :key="k" :game="g" /> -->
      </div>

      <!-- Contact -->
      <div id="contact" class="block">
        <div class="innercont">
          <llink :href="'mailto:hello@lostlakegames.com'">hello@lostlakegames.com</llink>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import gsap from 'gsap';
import llnav from './components/LL_Nav.vue';
import llink from './components/LL_Link.vue';
import llogo from './components/LL_Logo.vue';
import llprofile from './components/LL_Profile.vue';
// import llgame from './components/LL_Game.vue';

export default {
  name: 'App',
  components:{
    llnav,
    llink,
    llogo,
    llprofile,
    // llgame
  },
  mounted(){
    let scrolled = false;
    let rect = this.$refs['atf'].getBoundingClientRect();
    let logo = this.$refs['logo'].$el;
        logo.style.top = (window.innerHeight / 2) - (logo.offsetHeight/2) + "px";
    let blocks = document.querySelectorAll('.block');
    let blockArr = [];

    window.addEventListener('resize', () =>{
      logo.style.top = (window.innerHeight / 2) - (logo.offsetHeight/2) + "px";
    })

    gsap.from(this.$refs['nav'].$el, .9, {autoAlpha: 0, delay: .3});

    for(let i = 0; i < blocks.length; i++){
      blockArr.push({
        val: blocks[i].id,
        top: blocks[i].getBoundingClientRect().top
      });
    }

    this.$refs['inner'].addEventListener('scroll', (e) => {
      /*
      document.querySelectorAll('nav a').find((e) => {
        console.log(e);
      });
      */
      e.preventDefault();
      let st = e.target.scrollTop;
      let innerbArr = [];

      // console.log(st);

      for(let i in blockArr){
        if(st > blockArr[i].top - 100){
          innerbArr.push(blockArr[i].val);
        }
      }

      this.$nextTick(()=>{
        if(st < rect.height/2 + 100){
          gsap.to(logo, .3, {autoAlpha: 1});
          this.showLogo = false;
        }else{
          gsap.to(logo, .3, {autoAlpha: 0});
          this.showLogo = true;
        }
      })

      if(st < rect.height + 445){
        gsap.to("#content", .3, {'margin-right': -17});
        gsap.to('nav', .6, {backgroundColor: "rgba(0,0,0,0)"});
      }else{
        gsap.to("#content", .3, {'margin-right': 0});
        gsap.to('nav', .5, {backgroundColor: "rgba(0,0,0,.5)"});
      }

      if(st < 4){
        this.rot = 0;
      }else{
        this.rot = 45;
      }

      if(st < 210){
        if(scrolled){
          this.$refs['inner'].scrollTo(0,0);
          scrolled = false;
        }
        logo.style.top = 350+"px";

        gsap.to('.brg', .4, {autoAlpha: 1});
      }else{
        if(st > 450){
          logo.style.top = (800) - st+"px";
        }
        scrolled = true;
        gsap.to('.brg', .4, {autoAlpha: 0});
      }

      return false;
    });
  },
  data: function(){
    return {
      rot: 0,
      clicked: false,
      showLogo: false,
      experiences: [
        {
          bgPos: -240,
          name: 'Starcraft',
          img: 'starcraft.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        },
        {
          bgPos: -100,
          name: 'Guild Wars',
          img: 'guildwars.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        },
        {
          bgPos: -550,
          name: 'Gigantic',
          img: 'gigantic.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        },
      ],
      profiles: [
        {
          name: 'James Phinney',
          title: 'Game Design',
          img: 'james.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        },
        {
          name: 'Joe Pikop',
          title: 'Creative Direction',
          img: 'joe.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        },
        {
          name: 'Mark Podorf',
          title: 'Technology',
          img: 'mark.jpeg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        }
      ]
    }
  }
}
</script>

<style>

.mtn, .brg{
  width: 100%;
  background-size: cover !important;
  }
  .mtn{
    position: sticky;
    height: 100vh;
    z-index: 9996;
    bottom: 0px;
    background: url('./assets/LostLake/bangla.png') no-repeat center center;
    /* padding-bottom: -125px; */
    }
  .brg{
    position: absolute;
    height: 125%;
    top:0px;
    z-index: 9997;
    background: url('./assets/LostLake/bridge.jpg') no-repeat center center;
    }
.block{
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color:#000;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color:#FFF;
  display: flex;
  padding-bottom: 100px;
  box-sizing: border-box;
  align-items: center;
  }
  .block:first-child{
    margin-bottom: 450px;
    padding-bottom: 200px;
    }

*{
  margin: 0px;
  padding: 0px;
  }
html, body{
  height: 100%;
  width: 100%;
  }

#contact{
  font-family: 'inputSerif';
  font-size: 3em;
  }

#logoCont{
  /* height: 163vh; */
  /* height: 1684px; */
  position: absolute;
  top: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  /* font-family: 'Roboto', 'Segoe UI', Tahoma, sans-serif; */
  }
  #content{
    overflow-y: scroll;
    margin-right: -17px;
    }



  .cta_copy{
    /* margin: 650px 0 100px 0; */
    color:#FFF;
    font-family: 'inputSerif';
    font-size: 2.5em;
    font-weight: 900;
    color: rgb(69, 101, 120);
    line-height: 1.6;
    /* width: 90vw; */
    width: 1200px;
    }
    .innercont h2{
      width: 900px;
      margin-top: 100px;
      font-size: 54px;
      line-height: 1.4;
      flex: 1;
      font-family: 'inputSerif';
      margin-bottom: 100px;
      padding-right: 380px;
      display: block;
      }
    .innercont{
      display: flex;
      width: 1200px;
    }

    #scrollbar{
      opacity: 0;
      width:100px;
      height: 90%;
      position: fixed;
      right:0px;
      z-index:9997;
      bottom: 0px;
    }

    #logoScroll{
      height: 100px;
      width:100%;
      background-image: url('./assets/LostLake/logo_center2.png');
      background-size: cover;
      position: absolute;
      z-index:9999;
    }

</style>
