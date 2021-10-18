<template>
  <div>
    <h2>Ajouter un projet</h2>
    <form enctype="multipart/form-data">
      <p>Title: </p><input v-model="inputTitle">
      <p>Description:</p><textarea v-model="inputDescription"></textarea>
      <p>Role:</p><textarea v-model="inputRole"></textarea>
      <p>Category:</p><select v-model="inputCategory">
          <option disabled value="">Choisissez</option>
          <option>Affiche</option>
          <option>Webdesign</option>
          <option>Print</option>
      </select>
      <p>Date :</p><textarea v-model="inputDate"></textarea>
      <p>Couverture :</p><input type="file" ref="inputImage" @change=uploadFile()>
      <button @click=createProject>Create this Project !</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddProject',
  // Here is the data we get from our HTML Form.
  data () {
    return {
      inputTitle: '',
      inputDescription: '',
      inputRole: '',
      inputCategory: '',
      inputDate: '',
      inputImage: null
    }
  },
  methods: {
    // Saving the file in our data to send it !
    uploadFile: function () {
      this.inputImage = this.$refs.inputImage.files[0]
    },

    // Collecting everything inside our FormData object
    createProject: function () {
      const params = {
        title: this.inputTitle,
        description: this.inputDescription,
        role: this.inputRole,
        category: this.inputCategory,
        date: this.inputDate,
        image: this.inputImage
      }

      const formData = new FormData()

      Object.entries(params).forEach(
        ([key, value]) => formData.append(key, value)
      )

      // Finally, sending the POST request with our beloved Axios
      axios.post('http://localhost:3000/api/v1/projects', formData)
    }
  }
}
</script>
