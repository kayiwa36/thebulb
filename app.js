const app = Vue.createApp({
  data() {
    return {
      state: "on",
      picture: "img/bulbon.jpg",
    };
  },
  methods: {
       changeState() {        
          this.state = "off"
          this.picture = "img/bulboff.jpg"         
      }

      
  }
});

app.mount("#app");
