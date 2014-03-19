// sign in button drop down

$('.sign-in-btn').click(function() {
    $(this).addClass('active');
    $('.sign-in-drop').css('display', 'block');
    $('.sign-in-drop').css('height', '93px');
    $('.create-account-btn').addClass('active');
    $('.login-btn').addClass('active');


});

// saving musician sign-up to parse

$(function() {

    Parse.initialize("3iYwTMywkleelnVUpiZdaXPPqVpvDsxw5qsJ1pev", "xLRITPtlktBrAiar3Xfk83Rs1isM23IbUHdXbr82");

}),

$('.save-button-musician').click(function() {
    console.log('musician button firing function')
    var musician = new Parse.User();

    // capturing values that were inputed by musicians

    var musicianName = $('.musician-name').val();
    var musicianType = $('.solo-or-band').val();
    var musicianLocation = $('.musician-location').val();
    var musicianPhone = $('.musician-phone').val();
    var musicianEmail = $('.musician-email').val();
    var musicianUsername = $('.musician-username').val();
    var musicianPassword = $('.musician-password').val();
    var musicianVerifyPassword = $('.musician-verify-password').val();

    // setting inputs into Parse as objects

    musician.set("musicianName", "musician-name");
    musician.set("musicianType", "solo-or-band");
    musician.set("musicianLocation", "musician-location");
    musician.set("musicianPhone", "musician-phone");
    musician.set("musicianEmail", "musician-email");
    musician.set("musicianUsername", "musician-username");
    musician.set("musicianPassword", "musician-password");
    musician.set("musicianVerifyPassword", "musician-verify-password");


    musician.signUp(null, {
        success: function(musician) {
            $('.musician-name').val('');
            $('.solo-or-band').val('');
            $('.musician-location').val('');
            $('.musician-phone').val('');
            $('.musician-email').val('');
            $('.musician-username').val('');
            $('.musician-password').val('');
            $('.musician-verify-password').val('');
        },
        error: function(musician, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });


$('.save-button-bar').click(function() {
  console.log('bar button firing')
  var bar = new Parse.User();

  // capturing values inputed by bar owners

  var barName $('.bar-name').val();
  var barLocation $('.bar-location').val();
  var barPhone $('.bar-phone').val();
  var barEmail $('.bar-email').val();
  var barUserName $('.bar-user-name').val();
  var barPassword $('.bar-password').val();
  var barVerifyPassword $('.bar-verify-password').val();

  // Setting inputs into Parse as objects  

  bar.set("barName", "bar-name");
  bar.set("barLocation", "bar-location");
  bar.set("barPhone", "bar-phone");
  bar.set("barEmail", "bar-email");
  bar.set("barUsername", "bar-username");
  bar.set("barPassword", "bar-password");
  bar.set("barVerifyPassword", "bar-verify-password");
   

   
  bar.signUp(null, {
    success: function(bar) {
      $('.bar-name').val('');
      $('.bar-location').val('');
      $('.bar-phone').val('');
      $('.bar-email').val('');
      $('.bar-user-name').val('');
      $('.bar-password').val('');
      $('.bar-verify-password').val('');
    },
    error: function(bar, error) {
      // Show the error message somewhere and let the bar try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
});
