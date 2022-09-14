const app = Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
      confirm: "",
    };
  },
  methods: {
    showAlert() {
      alert("tets");
    },
    getInput(event) {
      this.output1 = event.target.value;
    },
    getInput2(event) {
      this.output2 = event.target.value;
    },
    getEnter() {
      this.confirm = this.output2;
    },
  },
});

app.mount("#assignment");
