<template>
  <a class='navlink' href='url'>{{ text }}</a>
</template>

<script>
export default ({
  name: 'NavLink',
  props: ['url', 'text']
})
</script>

<style>
  .navlink {
    padding: 1rem 2rem;
  }
</style>
