<template>
  <div class="profile">
    <div class="img" />
    <h3>{{ profile.name }} <div>{{ profile.title }}</div></h3>
    <p>{{ profile.description }}</p>
  </div>
</template>

<script>
// import gsap from 'gsap';

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
    console.log('hello');
  }
}
</script>

<style scoped>
#logoContainer {
z-index: 9998;
align-self: center;
position: sticky;
width: 350px;
height: 350px;
top: 190px;
}
  .test {
  display: flex;
  height: 100%;
  flex-direction: column;
  position: relative;
  }
  img {
  z-index: 9999;
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 80px 0px 0px 50px;
  }
  .test div {
    width: 70%;
    height: 20%;
    color:#FFF;
    border-width: 8px !important;
    box-sizing: border-box;
    cursor: pointer;
    }
  .test div:first-child {
    border-left: solid;
    border-top: solid;
    }
  .test div:last-child {
    border-right: solid;
    border-bottom: solid;
    margin-top: auto;
    margin-left: auto;
    }
</style>
