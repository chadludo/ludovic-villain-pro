<template>
  <router-link v-for='work in works' :key='work.id' to='/'>
    <div class='card flex flex-c bgcolor' :style="{ backgroundImage : 'url(' + work.image_url + ')' }">
      <div class='overlay'>
        <p>{{ work.date }}</p>
        <h3>{{ work.category }}</h3>
        <h2>{{ work.name }}</h2>
      </div>
    </div>
  </router-link>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Card',
  data () {
    return {
      works: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/api/v1/projects')
      .then(response => (this.works = response.data))
      .catch(error => console.log(error))
  }
}
</script>

<style lang='scss'>
/* Sass variables */
@import '../assets/scss/_variables.scss';

  .card {
    position: relative;
    width: 1fr;
    height: 400px;
    margin: 1rem 0;
    padding: 2rem;
    color: grey;
    justify-content: center;
    align-items: center;
    background-size: cover;
    border-radius: 0;
    transition: .2s border-radius ease-in;

    &:hover {
      border-radius: 1.5rem;
    }

    p {
      z-index: 2;
    }

    h2 {
      z-index: 2;
      font-size: $font-md;
    }

    h3 {
      z-index: 2;
      font-size: $font-s;
      font-weight: $bold;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: $primary;
      transition: .2s opacity ease-in-out;

      &:hover {
        opacity: .8;
      }
    }
  }
</style>
