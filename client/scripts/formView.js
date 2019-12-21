var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // var text = event.target.elements[0].value;
    // var userName = window.location.search.split("?username=")[1];
    var message = {
      username: App.username,
      text: event.target.elements[0].value,
      roomname: location.href.split("/")[6]
    };
    // console.log(event.target.elements[0].value);
    // console.log('hello event', event);
    // console.log(typeof window.location.search);
    console.log(event);
    Parse.create(message);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};