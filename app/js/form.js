
$('.form-input,.input-textarea,.input-checkbox,.input-radio').on('input',function(){
  var name = $('#name')[0].checkValidity();
  var email = $('#email')[0].checkValidity();
  var age = $('#age')[0].checkValidity();
  var role = $('#dropdown')[0].checkValidity();
  var most_like = $('#most-like')[0].checkValidity();
  var coment = $('#comment')[0].checkValidity();

  var requiredCheckboxes = $('input[type="checkbox"]');

  if(requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');

            checked=true

        }

 else {
            requiredCheckboxes.attr('required', 'required');

            checked=false
        }


    if(name && email && age && role && most_like && coment && checked)
    {
      $('.submit-button').css('background','#37af65')
      $('.submit-button').css('color','#f3f3f3')

    }
    else {
      $('.submit-button').css('background','#f3f3f3')
      $('.submit-button').css('color','red')
    }


});

$('#reset').on('click',function(){
  $('.submit-button').css('background','#f3f3f3')
  $('.submit-button').css('color','red')

});




$(document).ready(function () {
    $('#submit').on('click',function() {
      var requiredCheckboxes = $(':checkbox[required]');

        requiredCheckboxes.change(function(){

            if(requiredCheckboxes.is(':checked')) {
                requiredCheckboxes.removeAttr('required');
                requiredCheckboxes.removeAttr('oninvalid');
                requiredCheckboxes.removeAttr('oninput');

            }

            else {
                requiredCheckboxes.attr('required', 'required');
                requiredCheckboxes.attr('oninvalid','Invalid entry');
                requiredCheckboxes.attr('oninput','');

            }
        });
    });
});
