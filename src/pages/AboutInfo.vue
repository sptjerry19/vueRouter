<template>
  <h1>about information</h1>
  <div v-if="about" class="">
    <h1>title: "{{ about.title }}"</h1>
    <h1>author: "{{ about.author }}"</h1>
  </div>
  <div v-else class="">
    <h1>loading..... {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: null,
    };
  },
  created() {
    fetch("http://localhost:3000/foods/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.about = data))
      .then(() => console.log(this.about));
  },
};
</script>
