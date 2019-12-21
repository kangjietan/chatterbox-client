var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // GET request to have access to data
    Parse.readAll( (data) => {
      var dataArray = data.results;
      var roomNames = [];
      dataArray.forEach( (chat) => {
        if (chat.roomname) {
          roomNames.push(chat.roomname);
        }
      });

      // must take out scripts here
      var uniqueRoomNames = _.uniq(roomNames);
      uniqueRoomNames.forEach( (rooms) => {
        RoomsView.renderRoom.call( { 'roomname': rooms } );
      });
    });
  },

  renderRoom: function() {
    let html = '';
    var helper = _.template(`
      <option><%- this.roomname %></option>
    `);
    html = helper.call(this);
    RoomsView.$select.append(html);
  }

};
