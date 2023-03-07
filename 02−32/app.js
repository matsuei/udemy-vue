const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    computed: {
        result() {
          if (this.counter < 37) {
            return 'Not there yet';
          }
          return 'Too much!';
        }
      },
    methods: {
      add(num) {
        this.counter = this.counter + num;
      },
    },
  });
  
  app.mount('#assignment');
  