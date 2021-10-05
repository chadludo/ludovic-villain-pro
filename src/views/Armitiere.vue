<template>
  <h1>Armitière</h1>
  <div v-for='work in works' :key='work.id'>
    {{ work.pictures }}
  </div>
</template>

<script>
import works from '../datas/works.json'

export default {
  name: 'Armitiere',
  data () {
    return {
      works
    }
  }
}
</script>
