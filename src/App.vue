<template>
  <div class="fixed top-0 flex w-full justify-center h-16 text-lg items-center">
    <NavBar />
  </div>
  <router-view />
</template>

<script>
import NavBar from "./pages/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
