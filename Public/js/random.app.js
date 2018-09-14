var randomApp = new Vue({
  el: '#randomMain'
  data: {
    users: []
  },
  methods: {
    fetch_users() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {
        this.users = json.results;
      })
      .catch((err) => {
        console.log("fetch error");
        console.log('***', err);
      });
    }
  }
  created: function(){
    this.fetch_users()
  }
})
