var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- this.username %></div>
        <div class="roomname"><%- this.roomname %></div>
        <div class="text"><%- this.text %></div>
      </div>
    `)

};