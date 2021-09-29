<template>
    <h1>Works</h1>
    <div cards-container>
      <Card />
    </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'Works',
  components: {
    Card
  }
}
</script>

<style lang='scss'>
  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
</style>
