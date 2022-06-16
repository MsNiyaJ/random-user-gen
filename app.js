// Creates an application instance.
const app = Vue.createApp({
  // data is the properties of the application. The object we are passing into createApp is a root component.
  data() {
    return {
      firstName: 'Malika',
      lastName: 'Jones',
      email: 'malika@email.com',
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/women/12.jpg',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api/');
      const { results } = await res.json();
      //   console.log('results', results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

// Mount the app template to the element with the id 'app'
app.mount('#app');
