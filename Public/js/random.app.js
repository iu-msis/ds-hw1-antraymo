var randomApp = new Vue({
  el: '#randomMain'
  data: {
    users: []
  },

  computed: {
    age: function () {
      return moment().diff(moment(date), 'years')
    }
  },

  methods: {
    pretty_date: function (d) {
      return moment(d).format('l')
    },

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
