<template>
  <nav >
    <ul>
      <li><a href="#team">Team.</a></li>
      <li><a href="#experience">Experience.</a></li>
      <li><a href="#imagination">Imagination.</a></li>
      <li><a href="#contact">Contact.</a></li>
    </ul>
  </nav>
</template>
<script>
export default {

}
</script>
<style scope>
  nav {
    z-index: 9999;
    position: fixed;
    top:0px;
    right: 17px;
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
</style>
