<template>
  <div class='hero-container'>
    <div class='anim' @mousemove='parralax'>
      <img class='background' src='../assets/images/bg.png' alt='#'>
      <img class='firstplan' src='../assets/images/perso.png' alt='#'>
      <img class='secondplan' src='../assets/images/plant.png' alt='#'>
    </div>
    <div class='txt-intro'>
      <h1>Ludovic Villain</h1>
      <h2>Graphiste | Développeur</h2>
      <p>Que ce soit pour la création graphique de vos supports de communication ou la conception de votre site internet, je vous accompagne et vous guide pour la réalisation de vos projets.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang='scss'>

.hero-container {
  height: 100vh;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;

  img {
    width: 100%;
  }
}

.hero-grid {
  height: 100vh;
}

.anim {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  .firstplan {
    z-index: 3;
  }

  .background {
    z-index:  2;
  }

  .secondplan {
    z-index:  1;
  }
}
</style>
