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
            // Hooray! Let them use the app now.
        },
        error: function(musician, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });




})