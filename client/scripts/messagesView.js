var MessagesView = {

  // $('#chats') is a <div> in the body
  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      var dataArray = data.results;
      dataArray.forEach((chat) => {
        MessagesView.renderMessage.call(chat);
      });
    });
  },

  renderMessage: function() {
    // create an empty string
    let html = '';
    // use _.template to take object data and convert to html
    html = MessageView.render.call(this);
    // add to empty string
    // append to #chats div
    MessagesView.$chats.append(html);
  }

};