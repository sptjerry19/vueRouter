import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    tenCount: (state) => {
      return state.count * 10;
    },
  },
  mutations: {
    increment(state, n) {
      state.count += n;
    },
  },
});
