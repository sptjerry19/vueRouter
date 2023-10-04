<template>
  <div class="mt-16">
    <h2>Add Data</h2>
    <form @submit.prevent="addData">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="newData.name" required />
      <label for="singer">singer:</label>
      <input type="text" id="singer" v-model="newData.singer" required />
      <label for="image">Image:</label>
      <input
        type="file"
        id="image"
        ref="imageInput"
        @change="handleImageChange"
      />
      <button type="submit">Add</button>
    </form>
    <div v-for="music in musics" :key="music.id" class="">
      <h1>{{ music.name }}</h1>
      <p>{{ music.singer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musics: [],
      newData: {
        name: "",
        singer: "",
        image: null,
      },
    };
  },
  created() {
    fetch("http://localhost:3000/musics")
      .then((response) => response.json())
      .then((data) => (this.musics = data));
  },
  methods: {
    handleImageChange() {
      this.newData.image = this.$refs.imageInput.files[0].name;
    },
    addData() {
      // Send a POST request to JSON Server to add data
      fetch("http://localhost:3000/musics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.newData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data added:", data);
          // Optionally, you can reset the form or update the UI as needed.
          fetch("http://localhost:3000/musics")
            .then((response) => response.json())
            .then((data) => (this.musics = data));
          this.newData.name = "";
          this.newData.singer = "";
        })
        .catch((error) => {
          console.error("Error adding data:", error);
        });
    },
  },
};
</script>
