<template>
  <div id="app">

    <nav ref="nav">
      <ul>
        <li><a href="#team">Team.</a></li>
        <li><a href="#experience">Experience.</a></li>
        <li><a href="#imagination">Imagination.</a></li>
        <li><a href="#contact">Contact.</a></li>
      </ul>
    </nav>

    <div id="content" ref="inner">

      <!-- Above the fold -->
      <div ref="atf" class="block">
        <div class="brg"></div>
        <div style="height: 150vh; position: absolute; top: 0px; width: 100%; display: flex; flex-direction: column; align-items: center;">
          <llogo ref="logo" :rot="rot" />
          <div class="mtn" style="position: sticky; bottom: 0px; height: 100vh;"></div>
        </div>
      </div>

      <!-- Call to action copy -->
      <div id="imagination" class="block" style="margin-top: 485px; padding-top: 100px; color:#FFF; display: flex; flex-direction: row; box-sizing: border-box;">
        <p class="cta_copy" id="test">Lorem ipsum dolor sit amet, consectetur adipising. We are a <llink :href="'#experience'">team of experiences developers</llink> Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. <llink :href="'#team'">proven track record of creating legendary experiences</llink> Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum <llink :href="'#imagination'">imagination</llink> Etiam mattis ullamcorper dui. Aliquam erat volutpat, <llink :href="'#contact'">join us</llink> oCras condimentum velit eget dui.</p>
      </div>

      <!-- Team section -->
      <div id="team" class="block content" style="color:#FFF; display: flex; box-sizing: border-box; align-items: center;">
        <div style="width: 1200px">
          <h2 style="margin-top: 100px; font-size: 54px; line-height: 1.4; flex: 1; font-family: 'inputSerif'; margin-bottom: 100px;">Team of experienced developers.</h2>
        </div>
        <div style="flex-direction: row; display: flex; width: 1200px;">
          <llprofile v-for="(p, k) in profiles" :key="k" :profile="p" />
        </div>
      </div>

      <!-- Experience -->
      <div id="experience" class="block content" style="color:#FFF; display: flex; box-sizing: border-box; align-items: center;">
        <div style="width: 1200px; margin-bottom: 40px;">
          <h2 style="width: 900px; margin-top: 100px; font-size: 54px; line-height: 1.4; flex: 1; font-family: 'inputSerif'; margin-bottom: 100px;">Proven track record of creating legendary experiences.</h2>
        </div>
        <div style="position: relative; height: 100vh; width: 100%; display: flex; flex-direction: column; margin-bottom: 100px">
          <div style="width: 1200px; height: 100%; z-index: 9998; position: relative; align-self: center;">
            <div style="background-color:#000; padding: 30px; height: 90%; float: left; ">
              <h3 style="font-family: 'inputSerif'; font-size: 2.4em; margin-bottom: 30px; margin-top: 100px">Starcraft</h3>
              <p style="color: rgb(151, 191, 222); width: 300px; line-height: 1.7; font-family: 'inputSerifCondensed'; font-size: .8em;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales.</p>
            </div>
          </div>
          <div class="gImg"></div>
        </div>
        <div style="position: relative; height: 100vh; width: 100%; display: flex; flex-direction: column; margin-bottom: 100px">
          <div style="width: 1200px; height: 100%; z-index: 9998; position: relative; align-self: center;">
            <div style="background-color:#000; padding: 30px; height: 90%; float: right; ">
              <h3 style="font-family: 'inputSerif'; font-size: 2.4em; margin-bottom: 30px; margin-top: 100px">Guild Wars</h3>
              <p style="color: rgb(151, 191, 222); width: 300px; line-height: 1.7; font-family: 'inputSerifCondensed'; font-size: .8em;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales.</p>
            </div>
          </div>
          <div class="gImg2"></div>
        </div>
        <div style="position: relative; height: 100vh; width: 100%; display: flex; flex-direction: column;">
          <div style="width: 1200px; height: 100%; z-index: 9998; position: relative; align-self: center;">
            <div style="background-color:#000; padding: 30px; height: 90%; float: left; ">
              <h3 style="font-family: 'inputSerif'; font-size: 2.4em; margin-bottom: 30px; margin-top: 100px">Gigantic</h3>
              <p style="color: rgb(151, 191, 222); width: 300px; line-height: 1.7; font-family: 'inputSerifCondensed'; font-size: .8em;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales.</p>
            </div>
          </div>
          <div class="gImg3"></div>
        </div>
      </div>

      <!-- Contact -->
      <div id="contact" class="block" style="font-family: 'inputSerif'; font-size: 3em; color:#FFF; display: flex; align-items: center; box-sizing: border-box;">
        <div style="width: 1200px;">
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
// import llgame from './components/LL_Game.vue';

export default {
  name: 'App',
  components:{
    llink,
    llogo,
    llprofile
    // llgame
  },
  mounted(){
    let scrolled = false;
    let rect = this.$refs['atf'].getBoundingClientRect();

    gsap.from(this.$refs['nav'], .9, {autoAlpha: 0, delay: .3});
    this.$refs['inner'].addEventListener('scroll', (e) => {
      e.preventDefault();

      let st = e.target.scrollTop;

      if(st < rect.height + 600){
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
      experiences: [
        {
          name: 'Starcraft',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        },
        {
          name: 'Guild Wars',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
        },
        {
          name: 'Gigantic',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."
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
    position: fixed;
    top:0px;
    right: 0px;
    width: 100%;
    padding: 25px 10px 25px 0px;
    font-family: 'inputSerif';
    font-weight: bold;
    font-size: 1em;
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
        padding: 10px 15px 10px 15px;
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
    background: url('./assets/LostLake/bangla.png') no-repeat center center;
    }
  .brg{
    width: 100%;
    height: 125%;
    z-index: 9997;
    position: absolute;
    top:0px;
    background-size: cover !important;
    background: url('./assets/LostLake/bridge.jpg') no-repeat center center;
    }

  .cta_copy{
    /* margin: 650px 0 100px 0; */
    color:#FFF;
    font-family: 'inputSerif';
    font-size: 2.4em;
    font-weight: 900;
    color: rgb(69, 101, 120);
    line-height: 1.6;
    width: 1200px;
    }

    .gImg{
      z-index: 9996;
      width: 100%;
      background-image: url('./assets/LostLake/games/starcraft.jpg');
      background-repeat:no-repeat;
      background-size: cover;
      height: 100%;
      position: absolute;
      top:0px;
      }
    .gImg2{
      z-index: 9996;
      width: 100%;
      background-image: url('./assets/LostLake/games/guildwars.jpg');
      background-repeat:no-repeat;
      background-size: cover;
      height: 100%;
      position: absolute;
      top:0px;
      }
    .gImg3{
      z-index: 9996;
      width: 100%;
      background-image: url('./assets/LostLake/games/gigantic.jpg');
      background-repeat:no-repeat;
      background-size: cover;
      height: 100%;
      position: absolute;
      top:0px;
      }
</style>
