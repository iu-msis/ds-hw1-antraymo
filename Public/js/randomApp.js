var randomApp = new Vue({
  el: '#aj',
  data: {
    users: []
  },

  computed: {
    age: function (d) {
      return moment(d).diff(moment(date), 'years')
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
        this.users = json.results[0];
      })

    }
  },
  created () {
    this.fetch_users();

  }
})
