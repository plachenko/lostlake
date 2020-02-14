<template>
  <div id="app">

    <llnav ref="nav" />

    <!-- Scrollbar -->
    <div id="scrollbar" style="opacity: 0; width:100px; height: 90%; position: fixed; right:0px; z-index:9997; bottom: 0px;">
      <div @mousedown="clicked=true" @mouseup="clicked=false" ref="logoScroll" style="height: 100px; width:100%; background-color:#F0F; position: absolute; z-index:9998;"></div>
    </div>

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
      <div id="imagination" class="block">
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
        <llgame v-for="(g, k) in experiences" :key="k" :game="g" />
      </div>

      <!-- Contact -->
      <div id="contact" class="block">
        <div class="innercont">
          Join us
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import gsap from 'gsap';
import llink from './components/LL_Link.vue';
import llogo from './components/LL_Logo.vue';
import llprofile from './components/LL_Profile.vue';
import llgame from './components/LL_Game.vue';
import llnav from './components/LL_Nav.vue';

export default {
  name: 'App',
  components:{
    llink,
    llogo,
    llprofile,
    llgame,
    llnav
  },
  mounted(){
    let scrolled = false;
    let rect = this.$refs['atf'].getBoundingClientRect();

    gsap.from(this.$refs['nav'].$el, .9, {autoAlpha: 0, delay: .3});
    /*
    document.addEventListener('mousemove', (e)=>{
      if(this.clicked){
        this.$refs['logoScroll'].style.top = (e.offsetY-50)+"px";
      }
    })
    */

    this.$refs['inner'].addEventListener('scroll', (e) => {
      e.preventDefault();

      let st = e.target.scrollTop;

      this.$refs['logoScroll'].style.top = Math.round(st/11)+"px";

      this.$nextTick(()=>{
        if(st < rect.height){
          gsap.to(this.$refs['logo'].$el, .3, {autoAlpha: 1});
          gsap.to("#scrollbar", .3, {autoAlpha: 0});
        }else{
          gsap.to(this.$refs['logo'].$el, .3, {autoAlpha: 0});
          gsap.to("#scrollbar", .3, {autoAlpha: 1});
        }
      })

      if(st < rect.height + 500){
        gsap.to('nav', .6, {backgroundColor: "rgba(0,0,0,0)"});
      }else{
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

        gsap.to('.brg', .4, {autoAlpha: 1});
      }else{
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
      experiences: [
        {
          name: 'Starcraft',
          img: 'starcraft.jpg',
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        },
        {
          name: 'Guild Wars',
          img: 'guildwars.jpg',
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        },
        {
          name: 'Gigantic',
          img: 'gigantic.jpg',
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        },
      ],
      profiles: [
        {
          name: 'James Phinney',
          title: 'Game Design',
          img: 'james.jpg',
          description: "Cliff figured out that creating something is basically magic, and has been excavating the mysterious spaces of imagination since. Doing this in any form is thrilling, but doing it together is among the best things humans do. Cliff launched a lifelong adventure in what he considers to be the pinnacle of creative effort and expression - the gaming industry. To craft whole other worlds, settings, and experiences is really, truly, something tremendous. Most recently Cliff worked to bring the new God of War to life, and now, having found Bonfire - a place that seems custom made around his interests - he is more excited than ever before."
        },
        {
          name: 'Joe Pikop',
          title: 'Creative Direction',
          img: 'joe.jpg',
          description: "When Anna's parents told her no one would ever pay her to play video games, she embarked on a lifelong quest to prove them wrong. She studied Game Design and Development at Rochester Institute of Technology, and started her career as a programmer for Microsoft Games Studio. She moved to Valve to grow the Steam platform, and she helped launch the HTC Vive. When she moved to the bay area to run Content Strategy at Oculus, she knew it was time to live her Stardew Valley dream of opening a nonprofit farm for rescue animals. You can learn more about Sweet Farm and her journey to Bonfire in her origin story"
        },
        {
          name: 'Mark Podorf',
          title: 'Technology',
          img: 'mark.jpeg',
          description: "Dave got his start by doing QA, set building, and movie editing for the claymation games The Neverhood and Skullmonkeys. He built levels for Metal Arms: Glitch in the System before he started at Blizzard on WoW - working on zones like Howling Fjord and Grizzly Hills. He moved to Diablo III, where he designed exterior zones, dungeons, boss fights, and events. On Overwatch, he created Hollywood, based on inspiration from a visit to the Warner Bros. backlot, Watchpoint: Gibraltar, Horizon Lunar Colony, and Illios among others. At Bonfire, Dave is excited to create levels for our new IP, and to make us listen to his playlist - Davesneylandworld."
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
      }
    .innercont{
      display: flex;
      width: 1200px;
    }

</style>
