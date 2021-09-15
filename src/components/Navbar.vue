<template>
  <nav id='navbar'>
    <a href="/">
      <img class='logo' src='../assets/images/logo.svg' alt='logo'>
    </a>
    <div class='navlinks'>
      <NavLink url='/' text='Home'/>
      <NavLink url='/realisations' text='Réalisations'/>
      <NavLink url='/side-project' text='Side project'/>
      <NavLink url='/contact' text='Contact'/>
    </div>
  </nav>
</template>

<script>
import NavLink from './NavLink.vue'

export default ({
  name: 'Navbar',
  components: {
    NavLink
  }
})
</script>

<style lang='sass'>
#navbar {
  display: flex;
  justify-content: space-between;

  .logo {
    height: 1rem;
  }
}
</style>
