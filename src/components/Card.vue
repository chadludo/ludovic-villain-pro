<template>
  <router-link v-for='work in works' :key='work.id' to='/'>
    <div class='card flex flex-c'>
      {{ work.image }}
      <p>{{ work.date }}</p>
      <h3>{{ work.category }}</h3>
      <h2>{{ work.name }}</h2>
      <p>{{ work.description }}</p>
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
    width: 1fr;
    height: 400px;
    margin: 1rem 0;
    padding: 2rem;
    color: grey;
    justify-content: center;
    align-items: center;
    background-size: cover;

    h2 {
      font-size: $font-md;
    }

    h3 {
      font-size: $font-s;
      font-weight: $bold;
    }
  }
</style>
