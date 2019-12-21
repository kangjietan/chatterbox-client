var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= this.username %></div>
        <div><%= this.text %></div>
      </div>
    `)

};