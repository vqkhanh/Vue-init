const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    submitForm() {
      alert("tets");
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove() {
      this.counter--;
    },
  },
});

app.mount("#events");
