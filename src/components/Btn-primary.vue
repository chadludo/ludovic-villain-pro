<template>
  <router-link class='btn__primary' to='url'>{{text}}</router-link>
</template>

<script>
export default {
  name: 'BtnPrimary',
  props: ['url', 'text']
}
</script>
