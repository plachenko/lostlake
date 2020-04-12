<template>
  <div id="app">

    <llnav ref="nav" :logo="showLogo" @scrollUp="scrollUp" />

    <div id="content" ref="inner">

      <!-- Above the fold -->
      <div ref="atf" class="block">
        <div class="brg"></div>
        <div id="logoCont">
          <llogo ref="logo" :rot="rot" :logo="showLogo" />
          <div class="mtn"></div>
        </div>
      </div>

      <!-- Call to action copy -->
      <!-- <div id="cta" class="block content">
        <div class="innercont">
          <h2>Some Header.</h2>
        </div> -->
      <div id="imagination" class="block" style="padding-top: 5vw;">
        <p class="cta_copy" id="test">Lorem ipsum dolor sit amet, consectetur adipising. We are a team of <llink :href="'#team'">experienced developers</llink> Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. With a proven track record of creating <llink :href="'#experience'">legendary experiences</llink> Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum imagination. Etiam mattis ullamcorper dui. Aliquam erat volutpat, lorem <llink :href="'#contact'">contact us</llink> oCras condimentum velit eget dui.</p>
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
          <h2>A track record of creating legendary experiences.</h2>
        </div>
        <div class="innercont">
          <llprofile v-for="(g, k) in experiences" :key="k" :profile="g" :game="true" :bgpos="g.bgPos" />
        </div>
        <!-- <llgame v-for="(g, k) in experiences" :key="k" :game="g" /> -->
      </div>

      <!-- Contact -->
      <div id="contact" class="block">
        <div class="innercont" style="flex-direction: column; text-align: center;">
          <img style="width: 360px; align-self: center; padding-top:120px; padding-bottom:64px;" id="logoImg" src="./assets/LostLake/logo_center2.png" />
          <div>
            <llink style="font-size: 20px;" :color="'rgb(64, 89, 90)'" :href="'mailto:hello@lostlakegames.com'">hello@lostlakegames.com</llink>
          </div>
          <a href="https://www.linkedin.com/company/lost-lake-games/">
          <img style="width: 54px; align-self: center; padding-top:24px;" id="linkedin" src="./assets/LostLake/linkedin.png" /></a>
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
    let offset = (window.innerHeight / 2) - (logo.offsetHeight / 2);
    let blocks = document.querySelectorAll('.block');
    let blockArr = [];

    logo.style.top = offset + "px";

    window.addEventListener('resize', () =>{
      logo.style.top =  offset+ "px";
    })

    gsap.from(this.$refs['nav'].$el, .9, {autoAlpha: 0, delay: .3});

    for(let i = 0; i < blocks.length; i++){
      blockArr.push({
        val: blocks[i].id,
        top: blocks[i].getBoundingClientRect().top
      });
    }

    let cur = "";
    let curel = null;
    let els = document.querySelectorAll('nav .border');

    this.$refs['inner'].addEventListener('scroll', (e) => {
      // SCROLLING ANIMATIONS

      e.preventDefault();
      let st = e.target.scrollTop;
      let currentSec = blockArr.find(e => (e.top + window.innerHeight - 10) >= st);

      //reset navigation animation
      if(!currentSec.val && cur){
        cur = "";
        gsap.to(curel, .3, {opacity: 0});
      }

      // navigation animations
      if(currentSec.val && cur !== currentSec.val){
        cur = currentSec.val;
        curel = document.querySelectorAll('#'+cur + 'lnk .border');

        for(let i = 0; i <= els.length; i++){
          if(els[i]){
            gsap.to(els[i], .3, {opacity: 0});
          }
        }

        gsap.to(curel, .3, {opacity: 1});
      }

      // Rotate the logo.
      if(st < 4){
        this.rot = 0;
      }else{
        this.rot = 45;
      }

      // Fade the background and set the scroll to zero when scrolled up
      if(st < 210){
        if(scrolled){
          this.$refs['inner'].scrollTo(0,0);
          scrolled = false;
        }
        logo.style.top = offset+"px";
        gsap.to('.brg', .4, {autoAlpha: 1});
      }else{
        if(st > offset + 100){
          logo.style.top = (offset+(window.innerHeight/2)-75) - st+"px";
        }
        scrolled = true;
        gsap.to('.brg', .4, {autoAlpha: 0});
      }

      // Hide the logo on scroll down.
      if(st < rect.height/2 + 50){
        gsap.to(logo, .3, {autoAlpha: 1});
        // gsap.to(logo, .3, {autoAlpha: 1, paddingRight: 0});
        // gsap.to("#content", .3, {'margin-right': -17});
        this.showLogo = false;
      }else{
        gsap.to(logo, .3, {autoAlpha: 0});
        // gsap.to(logo, .3, {autoAlpha: 0, paddingRight: 100});
        // gsap.to("#content", .3, {'margin-right': 0});
        this.showLogo = true;
      }

      // Add scrollbar and change navigation background color.
      if(st < rect.height + 445){
        gsap.to('nav', .6, {backgroundColor: "rgba(0,0,0,0)"});
      }else{
        gsap.to('nav', .5, {backgroundColor: "rgba(0,0,0,.5)"});
      }

      return false;
    });
  },
  methods: {
    scrollUp(){
      this.$refs['inner'].scrollTo(0,0);
    }
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
          description: "Blizzard Entertainment's use of three distinct races in StarCraft is widely credited with revolutionizing the real-time strategy genre.[6] All units are unique to their respective races, and while rough comparisons can be drawn between certain types of units in the technology tree, every unit performs differently and requires different tactics for a player to succeed."
        },
        {
          bgPos: -100,
          name: 'Guild Wars',
          img: 'guildwars.jpg',
          description: " Guild Wars was noted for being the first major MMO to adopt a business model not based on monthly subscription fees, its instanced approach to gameplay, and the quality of the graphics and play for computers with low specifications."
        },
        {
          bgPos: -550,
          name: 'Gigantic',
          img: 'gigantic.jpg',
          description: "Gigantic was a free-to-play strategic third-person shooter video game developed by the independent game studio Motiga and published by Perfect World Entertainment. The game focused on team-based action combat with heroes battling alongside a massive guardian. Players must protect their guardian along with their team and attempt to destroy the opposing team and their guardian."
        },
      ],
      profiles: [
        {
          name: 'James Phinney',
          title: 'Design',
          socials: [
            {type: 'linkedIn', link: "https://www.linkedin.com/"}
          ],
          games: 'Warcraft 2, Diablo, Starcraft, wSacrifice  a, Guild Wars 1, Guildwars 2, Gigantic, State of Decay',
          img: 'james.jpg',
          description: "James builds worlds that people tell stories about. As a design and creative leader, he has established studio defining franchises for some of the industries largest companies. He connects the dots between creating worlds and crafting deep, rewarding gameplay experiences. Finding the fun and fostering it is his specialty."
        },
        {
          name: 'Joe Pikop',
          title: 'Art',
          socials: [
            {type: 'linkedIn', link: "https://www.linkedin.com/"},
          ],
          games: 'D&D Online, Empire Earth 3, Bully: SE, Guild Wars 2, Gigantic',
          img: 'joe.jpg',
          description: "Equal parts art, tech and spackle, Joe identifies gaps between artistic vision and technical implementation and fills them. You will find him making art, simplifying art pipelines, or writing tools and shaders. He’s relentless in his effort to make something both beautiful and unique."
        },
        {
          name: 'Mark Pottorf',
          title: 'Engineering',
          socials: [
            {type: 'linkedIn', link: "https://www.linkedin.com/"}
          ],
          games: 'H1Z1, Golem,Quantum Conundrum, Dark Void and Gigantic',
          img: 'mark.jpeg',
          description: "With extensive hands on experience in every system imaginable, Mark deftly tackles any technical challenge and elegantly weaves it into the bigger picture. As a consummate Design-gineer, Mark is never just creating a feature--he’s making games."
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
  /* background-color:#00F; */
  }
#app{
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  width: 100%;
  }
  #content{
    overflow-y: scroll;
    /* margin-right: -17px; */
    overflow-x: hidden;
    }



  .cta_copy{
    /* margin: 650px 0 100px 0; */
    color:#FFF;
    font-family: 'inputSerif';
    font-size: 2em;
    font-weight: 900;
    color: rgb(69, 101, 120);
    line-height: 1.6;
    /* width: 90vw; */
    width: 1200px;
    }
    .innercont h2{
      width: 900px;
      margin-top: 64px;
      font-size: 36px;
      line-height: 1.4;
      flex: 1;
      font-family: 'inputSerif';
      margin-bottom: 64px;
      padding-right: 100px;
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
