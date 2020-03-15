<template>
  <div class="profile">
    <div :style="{ backgroundImage: `url('${i}')`, 'background-position-x': bgpos+'px'}" class="img" />
    <div style="padding-left: 20px;">
      <h3 :style="{'margin-top': mar+'px', width: this.wid}">{{ profile.name }} <div v-if="!game">{{ profile.title }}</div></h3>
      <span style="font-family: InputSerif; display: inline-block; margin: 30px 0px 0px 0px; color:#CCC; font-size: 14px; width: 300px;">{{ profile.games }}</span>
      <p>{{ profile.description }}</p>
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
      this.mar = -50;
      this.wid = '100%';
    } else {
      this.i = require('../assets/LostLake/profile/'+this.profile.img);
      this.mar = -100;
      this.wid = '30px';
    }
    gsap.from(this.$el, 1, {opacity: 0, delay: this.$vnode.key - this.$vnode.key/1.4})
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
  font-size: 40px;
  margin-top: -88px;
  font-family: 'inputSerif';
}
h3 div {
  padding-top: 20px;
  width: 270px;
  font-size: 20px;
}
p{
  padding-right: 105px;
  font-size: .8em;
  line-height: 1.7;
  margin-top: 35px;
  font-family: 'inputSerifCondensed';
}
</style>
