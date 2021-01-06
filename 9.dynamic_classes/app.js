const app = Vue.createApp({
    // data, functions etc
    // template: '<h2>I am the template</h2>',
    data() {
      return {
        url: 'http://www.facebook.com',
        showBooks: true,
        books: [
          {title: 'Name of the wind', author:'patrick ruthfus', img: 'assets/1.jpg', isFav: true},
          {title: 'The Way of Kings', author:'brandon sanderson', img: 'assets/2.jpg', isFav: false},
          {title: 'The Final Empire', author:'brandon sanderson', img: 'assets/3.jpg', isFav: true}
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

