<template>
  <div class="profile">
    <div :style="{ backgroundImage: `url('${i}')`, 'background-position-x': bgpos+'px'}" class="img" />
    <div style="padding-left: 24px;">
      <h3 :style="{'margin-top': mar+'px', width: this.wid}">{{ profile.name }}
        <div class="titleDiv">
          <div v-if="!game" class="title">{{ profile.title }}</div>
        </div>
      </h3>
      <span style="font-family: InputSerif; display: inline-block; margin: 36px 0px 0px 0px; color:#CCC; font-size: 14px; width: 300px;">{{ profile.games }}</span>
      <p>{{ profile.description }}</p>
      <div v-if="profile.socials" class="socials">
        <div
        v-for="(social, idx) in profile.socials"
        :key="idx"
        class="socialBtn"
        :class="{
          lnBtn: social.type == 'linkedIn'
        }"
        @click="open(social.link)" />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'lprofile',
  props: {
    bgpos: {
      type: Number,
      default: 0
    },
    game: {
      type: Boolean,
      default: false
    },
    profile: {
      type: Object,
    },
  },
  data() {
    return{
      i: null,
      mar: null,
      wid: null
    }
  },
  mounted(){
    if(this.game){
      this.i = require('../assets/LostLake/games/'+this.profile.img);
      this.mar = -48;
      this.wid = '100%';
    } else {
      this.i = require('../assets/LostLake/profile/'+this.profile.img);
      this.mar = -76;
      this.wid = 'auto';
    }
    gsap.from(this.$el, 1, {opacity: 0, delay: this.$vnode.key - this.$vnode.key/1.4})
  },
  methods: {
    open(link){
      window.open(link, '_blank');
    }
  }
}
</script>

<style scoped>
.profile{
  width: 400px;
}
.img{
  height: 580px;
  width: 100%;
  background-size: cover;
}
h3{
  width: 30px;
  font-size: 30px;
  margin-top: -88px;
  font-family: 'inputSerif';
}
h3 div {
  padding-top: 0px;
  /* width: 270px; */
  font-size: 20px;
}
p{
  padding-right: 32px;
  font-size: .8em;
  line-height: 1.7;
  margin-top: 12px;
  font-family: 'inputSerifCondensed';
}
.title{
  margin-top: 2px;
  float: left;
}
.titleDiv{
  width: 270px;
  float: left;
}
.socials{
  float: left;
  width: 100%;
  padding-top: 7px;
  margin-top: 7px;
}
.socialBtn{
  background-repeat: no-repeat;
  display: inline-block;
  cursor: pointer;
  width: 26px;
  height: 26px;
  background:#000;
  }
  .lnBtn{ background: url('../assets/LostLake/linkedin_sm.png') !important; }
</style>
