var commentApp = new Vue({
  el: '#comment',
  data: {
    comments: [ ],
    commentForm: { }   // populated by this.getEmptyWorkForm()
  },

  methods: {
    handleWorkForm(e) {
      // TODO: Check validity
      // if (this.workSpan <= 0) {
      //   console.error ("Invalid work period.");
      // }
      //
      // this.workForm.start_date = this.workForm.start + ' ' + this.workForm.start_time;
      // this.workForm.hours = this.workSpan;
      // this.workForm.task_id = this.taskId;
      const s = JSON.stringify(this.workForm);
      console.log(s);

      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.work.push(json)})
      .catch( err => {
        console.error('WORK POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.workForm = this.getEmptyWorkForm();
    },

    getEmptyWorkForm() {
      return {
        comment: ''
      }
    },

  created () {

    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentApp.comment = json} )
    .catch( err => {
      console.log('WORK FETCH ERROR:');
      console.log(err);
    })

  }
})
