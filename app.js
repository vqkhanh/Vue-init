const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    getResult() {
      const that = this;
      setTimeout(() => {
        that.count = 0;
      }, 5000);
    },
  },
  computed: {
    getResult() {
      return this.count > 37 ? "To much!" : "Not there yet";
    },
  },
  methods: {
    add5() {
      this.count += 5;
    },
    add1() {
      this.count += 1;
    },
  },
});

app.mount("#assignment");
