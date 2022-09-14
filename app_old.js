const app = Vue.createApp({
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    fullname() {
      console.log("re calculatior....");
      if (this.name == "") return "";
      else return this.name + " " + "khanh";
    },
  },
  data() {
    return {
      counter: 10,
      output2: "",
      confirm: "",
      name: "",
    };
  },
  methods: {
    add() {
      this.counter += 5;
    },
    remove() {
      // this.output1 = event.target.value;
    },
    setName(event, other) {
      this.output2 = event.target.value + other;
    },
    reset() {
      this.name = "";
    },
    // submitForm() {
    //   // this.confirm = this.output2;
    // },
  },
});

app.mount("#events");
