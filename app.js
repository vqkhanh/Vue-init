const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "courseA",
      courseGoalB: "courseB",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
