var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    if ($('form #message').val().length > 0) {

      console.log(event);
      var message = {
        username: App.username,
        text: $('form #message').val()
        // roomname: location.href.split("/")[6]
      };

      // console.log(event.target);
      Parse.create(message);
      $('form #message').val('');
      MessagesView.initialize();

      console.log('click!');
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};