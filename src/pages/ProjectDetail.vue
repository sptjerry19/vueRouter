<template>
  <button @click="increase">increase</button>
  <button @click="decrease">decrease</button>
</template>

<script>
export default {
  methods: {
    increase() {
      this.$store.state.count++;
    },
    decrease() {
      this.$store.state.count--;
    },
  },
};
</script>
