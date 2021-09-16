<template>
  <div class='header'>
    <nav id='navbar'>
      <router-link to='/'>
        <img class='logo' src='./assets/images/logo.svg' alt='logo'>
      </router-link>
      <div class='navlinks'>
        <router-link to='/'>Home</router-link>
        <router-link to='/works'>Works</router-link>
        <router-link to='/side-project'>Side-project</router-link>
        <router-link to='/contact'>Contact</router-link>
      </div>
    </nav>
  </div>
  <section class='main-container'>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang='scss'>
/* Sass variables */
@import './assets/scss/_variables.scss';
/* Reset */
@import './assets/scss/_reset.scss';
/* Font */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');

body {
  font-family: 'Nunito', sans-serif;
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.3;
}

#navbar {
  display: flex;
  justify-content: space-between;
}

.navlinks {
  padding: 1rem;
  a {
    color: $primary;
    padding: 1rem;
  }
}
</style>
