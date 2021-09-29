<template>
  <a href='#'>
    <ul class='card'>
      <li v-for='work in works' :key='work.id'>
      <img :src='work.thumbnail' alt='description'>
      <h3>{{ work.category }}</h3>
      <h2>{{ work.title }}</h2>
      <p>{{ work.description }}</p>
      </li>
    </ul>
  </a>
</template>

<script>
import works from '../datas/works.json'

export default {
  name: 'Card',
  data () {
    return {
      works
    }
  }
}
</script>

<style lang='scss'>
  .card {
    width: 1fr;
    background-color: lightcoral;
  }
</style>
