var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var text = event.target.elements[0].value;
    // var userName = $('input[name="username"]').val();
    console.log(event.target.elements[0].value);
    console.log('hello event', event);
    // Parse.create(event.target.elements[0].value);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};