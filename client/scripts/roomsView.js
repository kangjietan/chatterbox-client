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

    RoomsView.$select.on('change', RoomsView.selectRoom);
    // RoomsView.$button.on('click', RoomsView.addRoom);
  },

  renderRoom: function() {
    let html = '';
    var helper = _.template(`
      <option><%- this.roomname %></option>
    `);
    html = helper.call(this);
    RoomsView.$select.append(html);
  },

  selectRoom: function (event) {
    const selectedRoomName = event.target.value;
    MessagesView.$chats.html('');
    // Parse.readAll()
    Parse.readAll( (data) => {
      // filter objects by current new name
      // const filteredArray = data.results.filter( () => )
      data.results.forEach( (obj) => {
        if (obj.roomname === selectedRoomName) {
          MessagesView.renderMessage.call(obj);
        }
      } );
    } );
  },

  // addRoom: function (event) {

  // }
};
