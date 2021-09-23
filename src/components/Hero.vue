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
  name: 'Hero',
  methods: {
    parralax () {
      const hero = document.querySelector('.hero-container')
      const firstplan = document.querySelector('.firstplan')
      const background = document.querySelector('.background')
      const secondPlan = document.querySelector('.secondplan')
      const distance = 25

      function handleHero (e) {
        const { offsetWidth: width, offsetHeight: height } = hero
        let { offsetX: x, offsetY: y } = e

        if (this !== e.target) {
          x = x + e.target.offsetLeft
          y = y + e.target.offsetTop
        }

        const xDistance = Math.round((x / width * distance) - (distance / 2))
        const yDistance = Math.round((y / height * distance) - (distance / 2))

        firstplan.style.top = `${yDistance}`
        firstplan.style.left = `${xDistance}`

        background.style.top = `${yDistance}`
        background.style.left = `${xDistance}`

        secondPlan.style.top = `${yDistance * 0.5}`
        secondPlan.style.left = `${xDistance * 0.5}`
      }

      hero.addEventListener('mousemove', handleHero)
    }
  }
}
</script>

<style lang='scss'>

.hero-container {
  height: 100vh;
  position: relative;

  img {
    height: 50vh;
    position: absolute;
    top: 50%;
    left: 50%;
  }
}

.hero-grid {
  height: 100vh;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
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
