<template>
  <header class='header'>
    <nav class='flex flex-jc-sb flex-ai-c'>
      <router-link class='header__logo' to='/'>
        <img src='./assets/images/logo.svg' alt='ludovic villain'>
      </router-link>
      <div class='header__links hide-for-mobile'>
        <router-link to='/'>Home</router-link>
        <router-link to='/works'>Works</router-link>
        <router-link to='/side-project'>Side-project</router-link>
        <router-link to='/contact'>Contact</router-link>
      </div>
      <a href="#" class='header__menu hide-for-desktop'>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </nav>
  </header>
  <section class='main-container'>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
/* Sass variables */
@import 'assets/scss/_variables.scss';
/* Reset */
@import 'assets/scss/_reset.scss';
/* Font */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
/* Globals */
@import 'assets/scss/_globals.scss';
/* Mixins */
@import 'assets/scss/_mixins.scss';

.header {
  nav {
    padding: 24px;
  }

  &__logo {
    img {
      width: 50px;
    }
  }

  &__menu {
    > span {
      display: block;
      width: 26px;
      height: 2px;
      background-color: $primary;

      &:not(:last-child) {
        margin-bottom: 3px;
      }
    }
  }

  &__links {
    a {
      position: relative;
      font-size: $font-sm;
      color: $primary;
      transition: color .2s ease-in-out;

      &:not(:last-child){
        margin-right: 32px;
      }

      &::before {
        content: '';
        position: absolute;
        display: block;
        height: 5px;
        background: $primary;
        opacity: 1;
        left: 0;
        top: 0;
        bottom: 10px;
        transition: opacity .2s ease-in-out;
      }

      &:hover {
        color: $secondary;

        &::before {
          opacity: 1;
        }
      }
    }
  }
}

.hide-for-mobile {
  @include breakpoint-down(medium){
    display: none;
  }
}

.hide-for-desktop {
  @include breakpoint-up(large){
    display: none;
  }
}
</style>
