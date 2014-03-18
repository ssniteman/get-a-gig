// sign in button drop down

$('.sign-in-btn').click(function() {
    $(this).addClass('active');
    $('.sign-in-drop').css('display', 'block');
    $('.sign-in-drop').css('height', '93px');
    $('.create-account-btn').addClass('active');
    $('.login-btn').addClass('active');


});





Parse.initialize("3iYwTMywkleelnVUpiZdaXPPqVpvDsxw5qsJ1pev", "xLRITPtlktBrAiar3Xfk83Rs1isM23IbUHdXbr82");

































$('.save-button-bar').click(function){
  console.log('bar button firing')
  var bar = new Parse.User();

  var barUsername $('.bar-username').val();
  var barLocation $('.bar-location').val();
  var barPhone $('.bar-phone').val();
  var barEmail $('.bar-email').val();
  var barPassword $('.bar-password').val();
  var barVerifyPassword $('.bar-verify-password').val();




  bar.set("username", "my name");
  bar.set("password", "my pass");
  bar.set("email", "email@example.com");
  bar.set("email", "email@example.com");
  bar.set("email", "email@example.com");
  bar.set("email", "email@example.com");
   
  // other fields can be set just like with Parse.Object
  bar.set("phone", "415-392-0202");
   
  bar.signUp(null, {
    success: function(bar) {
      // Hooray! Let them use the app now.
    },
    error: function(bar, error) {
      // Show the error message somewhere and let the bar try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
}