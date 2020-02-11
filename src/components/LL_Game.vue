<template>
  <div class="game">
    <h3>{{ game.name }}</h3>
    <div class="img" />
    <p>{{ game.description }}</p>
  </div>
</template>

<script>
// import gsap from 'gsap';

export default {
  name: 'llgame',
  props: {
    game: {
      type: Object,
    }
  },
  methods: {

  },
  mounted(){
    // gsap.from(this.$el, 1, {opacity: 0, delay: this.$vnode.key - this.$vnode.key/1.4})
  }
}
</script>

<style scoped>
.game{
  box-sizing: content-box;
}
.img{
  height: 500px;
  position: absolute;
  width: 100%;
  background-color:#F00;
}
h3{
  width: 30px;
  font-size: 40px;
  margin-top: -70px;
}

p{
  padding-right: 40px;
  margin-top: 40px;
  width: 400px;
  background-color:#000;
  }
</style>
