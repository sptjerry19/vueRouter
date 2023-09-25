<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <router-link :to="'/about/' + post.id">{{ post.title }}</router-link>
    <p>{{ post.author }}</p>
  </div>
  <h1>hello DOM</h1>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    console.log(document.querySelector("h1"));
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => (this.posts = data));
  },
  mounted() {
    console.log(document.querySelector("h1"));
  },
};
</script>
