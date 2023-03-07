const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  computed: {
    fullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'lastName';
    }
  },
  methods: {
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'lastName';
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert();
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
