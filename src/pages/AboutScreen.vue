<template>
  <div class="py-16 bg-gray-50 overflow-hidden">
    <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
      <div>
        <span class="text-gray-600 text-lg font-semibold">Main features</span>
        <h2 class="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">
          A technology-first approach to payments
          <br class="lg:block" hidden />
          and finance
        </h2>
      </div>
      <div
        class="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          class="relative group bg-white transition hover:z-[1] hover:shadow-2xl"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="relative p-8 space-y-8">
            <img
              :src="post.src"
              class="w-16"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div class="space-y-2">
              <h5
                class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600"
              >
                {{ post.title }}
              </h5>
              <p class="text-sm text-gray-600">
                {{ post.author }}
              </p>
            </div>
            <router-link
              :to="'/about/' + post.id"
              class="flex justify-between items-center group-hover:text-yellow-600"
            >
              <span class="text-sm">read more</span>
              <span
                class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                >&RightArrow;</span
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    fetch("http://localhost:3000/foods")
      .then((response) => response.json())
      .then((data) => (this.posts = data));
  },
  mounted() {},
};
</script>
