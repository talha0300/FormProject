
$('input,textarea').on('input',function(){
  var inpObj1 = document.getElementById("name").checkValidity();
  var inpObj2 = document.getElementById("email").checkValidity();
  var inpObj3 = document.getElementById("age").checkValidity();
  var inpObj4 = document.getElementById("dropdown").checkValidity();
  var inpObj5 = document.getElementById("most-like").checkValidity();
  var inpObj7 = document.getElementById("comment").checkValidity();
  console.log(inpObj7);
  var requiredCheckboxes = $('input[type="checkbox"]');
  //console.log('6');
  //requiredCheckboxes.change(function(){
        //console.log("message")
  if(requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
            //requiredCheckboxes.removeAttr('oninvalid');
            //requiredCheckboxes.removeAttr('oninput');
            inpObj6=true
            //onsole.log('4');
        }

 else {
            requiredCheckboxes.attr('required', 'required');
            //requiredCheckboxes.attr('oninvalid','Invalid entry');
            //requiredCheckboxes.attr('oninput','');
            //console.log('5');
            inpObj6=false
        }

    console.log(inpObj1,inpObj2,inpObj3,inpObj4,inpObj5,inpObj6,inpObj7);
    if(inpObj1 && inpObj2 && inpObj3 && inpObj4 && inpObj5 && inpObj6 && inpObj7)
    {
      $('#submit').css('background','#37af65')
      $('#submit').css('color','#f3f3f3')
      console.log('76');
    }
    else {
      $('#submit').css('background','#f3f3f3')
      $('#submit').css('color','red')
    }
  //var inpObj = document.getElementById("name").checkValidity();
  //console.log(this.checkValidity());
  /*var form = $( "#survey-form" );
  if(form.valid()){
    $('#submit').css('background','#37af65')
    $('#submit').css('color','#f3f3f3')
    console.log('1');
  }
  else{
      $('#submit').css('background','#f3f3f3')
      $('#submit').css('color','red')
      console.log('2');
  }*/

});

$('#reset').on('click',function(){
  $('#submit').css('background','#f3f3f3')
  $('#submit').css('color','red')
  console.log('3');
});




$(document).ready(function () {
    $('#submit').on('click',function() {
      var requiredCheckboxes = $(':checkbox[required]');
      console.log('6');
        requiredCheckboxes.change(function(){
            //console.log("message")
            if(requiredCheckboxes.is(':checked')) {
                requiredCheckboxes.removeAttr('required');
                requiredCheckboxes.removeAttr('oninvalid');
                requiredCheckboxes.removeAttr('oninput');
                console.log('4');
            }

            else {
                requiredCheckboxes.attr('required', 'required');
                requiredCheckboxes.attr('oninvalid','Invalid entry');
                requiredCheckboxes.attr('oninput','');
                console.log('5');
            }
        });
    });
});

/*
const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    console.log('8');
  } else {
    email.setCustomValidity("");
  }
});*/
/*
$()document.ready(function (){
  $('#submit').on('click',function(){
    var requiredCheckboxes = $(':checkbox[required]');

      requiredCheckboxes.change(function(){
          //console.log("message")
          if(requiredCheckboxes.is(':checked')) {
              requiredCheckboxes.removeAttr('required');
          }

          else {
              requiredCheckboxes.attr('required', 'required');
          }
      });
  })

})*/

/*$(document).ready(function () {
    $('#submit').on('click',function() {
      checked = $("input[type=checkbox]:checked").length;

      if(!checked) {
        alert("You must check at least one checkbox.");
        return false;
      }

    });
});*/
/*
function myFunction() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}*/
/*$(document).ready(function (){
  $('#submit').css('background','#f3f3f3')
    $('#submit').css('color','red')
})*/

/*const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    console.log('8');
  } else {
    email.setCustomValidity("");
  }
});*/

/*$(document).ready(function () {
  $("#addnewcadidateform").validate({
      rules: {
          name: "required",
          email: "required",
          age: "required",
      },
      messages: {
          name: "Name Requ",
          age: "Age",
          email: {
              required: "Enter your Email",
              email: "Please enter a valid email address.",
          }
      }
  });
});*/

/*$('#email').on('input', function() {
	var input=$(this);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){
    input.removeClass("valid").addClass("invalid");
    console.log("1");
  }
	else{
    input.removeClass("valid").addClass("invalid");
    console.log('2');
  }
});*/
