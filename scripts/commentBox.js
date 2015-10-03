var CommentList = require('./commentList.js')
var CommentForm = require('./commentForm.js')

module.exports = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
