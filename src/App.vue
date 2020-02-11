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

      <!-- Above the fold -->
      <div class="block">
        <llogo :rot="rot" />
        <div class="brg"></div>
        <div style="height: 110vh; position: absolute; top: 0px; width: 100%;">
          <div class="mtn" style="position: sticky; bottom: 0px; height: 100vh;"></div>
        </div>
      </div>

      <!-- Call to action copy -->
      <div class="block" style="color:#FFF; display: flex; flex-direction: row; box-sizing: border-box; padding: 400px 200px 0px 200px;">
        <p class="cta_copy" id="test">Lorem ipsum dolor sit amet, consectetur adipising. We are a <llink>team of experiences developers</llink> Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. <llink>proven track record of creating legendary experiences</llink> Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum <llink>imagination</llink> Etiam mattis ullamcorper dui. Aliquam erat volutpat, <llink>join us</llink> oCras condimentum velit eget dui.</p>
      </div>

      <!-- Team section -->
      <div class="block content" style="color:#FFF; display: flex; box-sizing: border-box; padding: 0px 200px 0px 200px;">
        <h2 style="font-size: 54px;">Team of experienced developers.</h2>
        <div style="flex-direction: row; display: flex;">
          <llprofile v-for="(p, k) in profiles" :key="k" :profile="p" />
        </div>
      </div>

      <!-- Experience section -->
      <div class="block" style="color:#FFF; display: flex; box-sizing: border-box; padding: 0px 200px 0px 200px;">
        <h2 style="font-size: 54px;">Proven track record of creating legendary experiences.</h2>
        <llgame :game="game" />
      </div>

      <div class="block" style="color:#FFF; display: flex; box-sizing: border-box; padding: 0px 200px 0px 200px;">
        Join Us.
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

export default {
  name: 'App',
  components:{
    llink,
    llogo,
    llprofile,
    llgame
  },
  mounted(){
    this.$refs['inner'].addEventListener('scroll', (e) => {
      e.preventDefault();

      let st = e.target.scrollTop;

      if(st < 4){
        this.rot = 0;
        gsap.to('.brg', .4, {autoAlpha: 1});
        gsap.to('nav', .6, {backgroundColor: "rgba(0,0,0,0)"});
      }else{
        this.rot = 45;
        gsap.to('.brg', .4, {autoAlpha: 0});
        gsap.to('nav', .5, {backgroundColor: "rgba(0,0,0,.5)"});

        return false;
      }
    });
  },
  data: function(){
    return {
      rot: 0,
      game: {
        name: 'Starcraft',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
      },
      profiles: [
        {
          name: 'James Phinney',
          title: 'Game Design',
          description: "Cliff figured out that creating something is basically magic, and has been excavating the mysterious spaces of imagination since. Doing this in any form is thrilling, but doing it together is among the best things humans do. Cliff launched a lifelong adventure in what he considers to be the pinnacle of creative effort and expression - the gaming industry. To craft whole other worlds, settings, and experiences is really, truly, something tremendous. Most recently Cliff worked to bring the new God of War to life, and now, having found Bonfire - a place that seems custom made around his interests - he is more excited than ever before."
        },
        {
          name: 'Joe Pikop',
          title: 'Creative Direction',
          description: "When Anna's parents told her no one would ever pay her to play video games, she embarked on a lifelong quest to prove them wrong. She studied Game Design and Development at Rochester Institute of Technology, and started her career as a programmer for Microsoft Games Studio. She moved to Valve to grow the Steam platform, and she helped launch the HTC Vive. When she moved to the bay area to run Content Strategy at Oculus, she knew it was time to live her Stardew Valley dream of opening a nonprofit farm for rescue animals. You can learn more about Sweet Farm and her journey to Bonfire in her origin story"
        },
        {
          name: 'Mark Podorf',
          title: 'Technology',
          description: "Dave got his start by doing QA, set building, and movie editing for the claymation games The Neverhood and Skullmonkeys. He built levels for Metal Arms: Glitch in the System before he started at Blizzard on WoW - working on zones like Howling Fjord and Grizzly Hills. He moved to Diablo III, where he designed exterior zones, dungeons, boss fights, and events. On Overwatch, he created Hollywood, based on inspiration from a visit to the Warner Bros. backlot, Watchpoint: Gibraltar, Horizon Lunar Colony, and Illios among others. At Bonfire, Dave is excited to create levels for our new IP, and to make us listen to his playlist - Davesneylandworld."
        }
      ]
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
    margin-right: -17px;
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

.cta_copy{
  color:#FFF;
  font-size: 2vw;
  color: #456195;
  padding: 30px;
  }
</style>
