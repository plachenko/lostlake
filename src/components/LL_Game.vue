<template>
  <div class="cont">
    <div class="inner">
      <div ref="desc" class="pos">
        <h3>{{game.name}}</h3>
        <p>{{game.description}}</p>
      </div>
    </div>
    <div class="gImg" :style="{ backgroundImage: `url('${i}')`}" />
  </div>
</template>

<script>
export default {
  name: 'llgame',
  props: {
    game: {
      type: Object,
    }
  },
  data() {
    return{
      i: null
    }
  },
  methods: {

  },
  mounted(){
    this.i = require('../assets/LostLake/games/'+this.game.img);
    if((this.$vnode.key+1) % 2 == 0){
      this.$refs['desc'].style.float = "right";
    } else {
      this.$refs['desc'].style.float = "left";
    }
  }
}
</script>

<style scoped>
.cont{
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  }
  .pos{
    background-color:#000;
    padding: 30px;
    height: 90%;
    float: left;
    }
    .pos h3{
      font-family: 'inputSerif';
      font-size: 2.4em;
      margin-bottom: 30px;
      margin-top: 100px
      }
      .pos p{
        color: rgb(151, 191, 222);
        width: 300px;
        line-height: 1.7;
        font-family: 'inputSerifCondensed';
        font-size: .8em;
        }
.inner{
  width: 1200px;
  height: 100%;
  z-index: 9998;
  position: relative;
  align-self: center;
  }
    .gImg{
      z-index: 9996;
      width: 100%;
      background-repeat:no-repeat;
      background-size: cover;
      height: 100%;
      position: absolute;
      top:0px;
      }
</style>
