const app = Vue.createApp({
  data() {
    return {
      user: "",
      paragraphIsVisible: true,
      inputBackgroundColor: "",
    };
  },
  computed: {
    userClass() {
      return {
        user1: this.user === "user1",
        user2: this.user === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});
app.mount("#assignment");
