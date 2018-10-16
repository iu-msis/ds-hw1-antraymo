var commentApp = new Vue({
  el: '#comment',
  data: {
    comments: [ ],
    commentForm: { }   // populated by this.getEmptyWorkForm()
  },

  methods: {
    handleCommentForm(e) {
      // TODO: Check validity
      // if (this.workSpan <= 0) {
      //   console.error ("Invalid work period.");
      // }
      //
      // this.workForm.start_date = this.workForm.start + ' ' + this.workForm.start_time;
      // this.workForm.hours = this.workSpan;
      // this.workForm.task_id = this.taskId;
      const s = JSON.stringify(this.commentForm);
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
      .then( json => {this.comment.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.commentForm = this.getEmptyCommentForm();
    },

    getEmptyCommentForm() {
      return {
        comment: ''
      }
    },

  created () {

    this.commentForm = this.getEmptyCommentForm();

    const url = new URL(window.location.href);

    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentApp.comment = json} )
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })

  }
})
