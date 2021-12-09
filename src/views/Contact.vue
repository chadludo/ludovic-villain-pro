<template>
  <div class='contact-form'>
    <h2>This is a contact page</h2>
    <form id='contact-form' @submit='checkForm' action='#' method='post'>

      <p class='error-wrapper' v-if='errors.length'>
        <b>Merci de remplir le champs requis :</b>
        <ul>
          <li class='error' v-for='error in errors' :key='error.index'>
            {{ error }}
          </li>
        </ul>
      </p>
      <p><label for='firstname'>Prénom</label></p>
      <input id='firstname' v-model='firstname' type='text' name='firstname' v-on:focus='displayLabel'>
      <p><label for='lastname'>Nom</label></p>
      <input id='lastname' v-model='lastname' type='text' name='lastname'>
      <p><label for='phone'>Téléphone</label></p>
      <input id='phone' v-model='phone' type='phone' name='phone'>
      <p><label for='email'>Email</label></p>
      <input id='email' v-model='email' type='email' name='email'>
      <p><label for='message'>Message</label></p>
      <input class='message' id='message' v-model='message' type='text' name='message'><br><br>
      <p><input type="submit" value='Envoyer'></p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      errors: [],
      firstname: null,
      lastname: null,
      email: null,
      message: null,
      labelActive: false
    }
  },
  methods: {
    checkForm: function (e) {
      if (this.firstname && this.lastname && this.email && this.message) {
        return true
      }

      this.errors = []

      if (!this.firstname) {
        this.errors.push('Prénom requis.')
      }

      if (!this.lasttname) {
        this.errors.push('Nom requis.')
      }

      if (!this.email) {
        this.errors.push('Email requis.')
      }

      if (!this.message || this.message < 30) {
        this.errors.push('Laissez un petit message !')
      }
      e.preventDefault()
    },
    displayLabel: function (e) {
      this.labelActive = !this.labelActive
    }
  }
}
</script>

<style lang='scss'>
/* Sass variables */
@import '../assets/scss/_variables.scss';

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 500px;
    height: 40px;
    padding: 5px 20px 5px 20px;
    border-radius: 20px;
    border: 1px solid lightgrey;
  }

  input:focus {
    outline: none !important;
    border: 1px solid $secondary;
    background-color: #edfcf8;
  }

  label {
    opacity: 0;
    font-size: $font-s;
    color: $primary;
    margin-left: 21px;
    margin-bottom: 10px;
    transition: .4s opacity ease-in-out;
  }

  .active-label {
    opacity: 1;
  }

  input.message {
      vertical-align: top;
      height: 150px;
    }

  p {
    margin-top: .5rem;
  }

  .error-wrapper {
    background-color: lightpink;
    border: 1px dotted palevioletred;
    border-radius: 1rem;
    padding: .5rem;
  }
}
</style>
