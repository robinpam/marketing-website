$('#page-content .container').first().attr('class', '');
$('#main-nav-cont').hide();
$('#page-header').hide();
$('#page-header-gradient').hide();
$('.form-success').hide();
$('header').hide();

var opticonSpeakerHelper = window.optly.mrkt.form.opticonSpeakerForm({formId: 'speaker-form'});

$(opticonSpeakerHelper.formElm).on('submit', function(e) {
  e.preventDefault();
  this.validateForm();
}.bind(opticonSpeakerHelper));