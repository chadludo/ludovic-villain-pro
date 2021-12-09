<template>
  <div class='hero-container flex-jc-c'>
    <div class='hero-wrapper flex'>
      <div class='txt-intro'>
        <h1>Ludovic Villain</h1>
        <h2>Graphiste | Développeur</h2>
        <p>Que ce soit pour la création graphique de vos supports de communication ou la conception de votre site internet, je vous accompagne et vous guide pour la réalisation de vos projets.</p>
        <BtnPrimary to='/contact' text='Say hi !' />
      </div>
      <div class='img-intro'>
        <img src='../assets/images/creatif-at-work.png' alt='#'>
      </div>
    </div>
  </div>
</template>

<script>
import BtnPrimary from './Btn-primary.vue'
export default {
  name: 'Hero',
  components: {
    BtnPrimary
  }
}
</script>

<style lang='scss'>
.hero-container {
  display: flex;
  justify-content: center;
  height: 70vh;
  margin: 0 auto;
  background-color: #fff6ee;

  .txt-intro{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .img-intro{
    width: auto;
  }
}

.hero-wrapper {
  width: 80rem;
}
</style>
