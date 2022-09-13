const app = Vue.createApp({
  data() {
    return {
      name: "khanh",
      age: 41,
      img_url: "./img.png",
    };
  },
  methods: {
    outputGoal() {
      return Math.random().toPrecision(1);
    },
  },
});
app.mount("#user-goal");
