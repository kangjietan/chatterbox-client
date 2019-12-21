var MessageView = {

  render: _.template(`
      <div class="chat">
        <a href=javascript: highlight('" + <%- this.username %> + "'); > <%- this.username %> </a>
        <div class="username"><%- this.username %></div>
        <div class="<%- this.roomname %>"></div>
        <div class="text"><%- this.text %></div>
      </div>
    `),

  // highlight: function (name) {
  //   var friends = document.getElementsByClassName(name);
  //   friends.forEach( (friend) => {
  //     friend.css("color", "red");
  //   });
  // }
};

var highlight = function (name) {
  var friends = document.getElementsByClassName(name);
  friends.forEach( (friend) => {
    friend.css("color", "red");
  });
};