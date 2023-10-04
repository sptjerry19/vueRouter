<template>
  <div class="mt-16">
    <h1>count is {{ count }}</h1>
    <div v-for="music in musics" :key="music.id" class="">
      {{ music }}
    </div>
    <audio src="../assets/songs/pewpew.mp3" alt="">asfasf</audio>
  </div>
  <ProjectDetail />
</template>

<script>
import ProjectDetail from "./ProjectDetail.vue";
export default {
  components: {
    ProjectDetail,
  },
  data() {
    return {
      musics: [],
    };
  },
  created() {
    fetch("http://localhost:3000/musics")
      .then((response) => response.json())
      .then((data) => (this.musics = data));
  },
  computed: {
    count() {
      return this.$store.getters.tenCount;
    },
  },
};
</script>
