const app = Vue.createApp({
  data() {
    return {
      courseGoal: "test",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? "Learn Vue" : "Master Vue";
    },
  },
});

app.mount("#user-goal");
