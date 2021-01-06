const app = Vue.createApp({
    // data, functions etc
    // template: '<h2>I am the template</h2>',
    data() {
      return {
        showBooks: true,
        books: [
          {title: 'Name of the wind', author:'patrick ruthfus'},
          {title: 'The Way of Kings', author:'brandon sanderson'},
          {title: 'The Final Empire', author:'brandon sanderson'}
        ]
      }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks = !this.showBooks
      }
    }
  })
  
  app.mount('#app')