<template>
  <div class="profile">
    <div class="img" />
    <!-- <div :style="{ backgroundImage: `url('${profile.img}')`}" class="img" /> -->
    <h3>{{ profile.name }} <div>{{ profile.title }}</div></h3>
    <p>{{ profile.description }}</p>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'lprofile',
  props: {
    profile: {
      type: Object,
    },
  },
  methods: {

  },
  mounted(){
    gsap.from(this.$el, 1, {opacity: 0, delay: this.$vnode.key - this.$vnode.key/1.4})
  }
}
</script>

<style scoped>
.img{
  height: 580px;
  width: 100%;
  background-image: url('../assets/LostLake/profile/mark.jpeg');
  background-size: cover;
}
h3{
  width: 30px;
  font-size: 40px;
  margin-top: -70px;
  font-family: 'inputSerif';
}
h3 div {
  padding-top: 10px;
  width: 270px;
  font-size: 20px;
}
p{
  padding-right: 105px;
  font-size: .8em;
  line-height: 1.7;
  margin-top: 40px;
  font-family: 'inputSerifCondensed';
}
</style>
