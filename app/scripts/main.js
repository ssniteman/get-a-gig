// sign in button drop down

$('.sign-in-btn').click(function() {
    $(this).addClass('active');
    $('.sign-in-drop').css('height', '145px');
    $('.create-account-btn').addClass('active');
});



// saving musician sign-up to parse

$(function() {

    Parse.initialize("3iYwTMywkleelnVUpiZdaXPPqVpvDsxw5qsJ1pev", "xLRITPtlktBrAiar3Xfk83Rs1isM23IbUHdXbr82");

}),




// sending info up to parse once ACCOUNT IS CREATED

$('.save-button-musician').click(function() {
    console.log('musician button firing function')
    var musician = new Parse.User();

    // capturing values that were inputed by musicians

    var name = $('.musician-name').val();
    var email = $('.musician-name').val();
    var username = $('.musician-username').val();
    var password = $('.musician-password').val();
    var verifyPassword = $('.musician-verify-password').val();
    var type = "musician"
    // setting inputs into Parse as objects

    musician.set("name", $('.musician-name').val());
    musician.set("username", $('.musician-username').val());
    musician.set("email", $('.musician-email').val());
    musician.set("password", $('.musician-password').val());
    musician.set("verifyPassword", $('.musician-verify-password').val());


    musician.signUp(null, {
        success: function(musician) {

        },
        error: function(musician, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });
});

// me

$('.save-button-bar').click(function() {
    console.log('bar button firing')
    var bar = new Parse.User();

    // capturing values inputed by bar owners

    var name = $('.bar-name').val();
    var barLocation = $('.bar-location').val();
    var barPhone = $('.bar-phone').val();
    var barEmail = $('.bar-email').val();
    var barUserName = $('.bar-user-name').val();
    var barPassword = $('.bar-password').val();
    var barVerifyPassword = $('.bar-verify-password').val();
    var userType = "bar";

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

// end of sending info to parse for sign-up users



// code for CURRENT USERS to sign-in

// $('.login-btn').on('click', function() {
//     var musician-username


// })





// code for CURRENT USERS - Don't need to sign-in everytime

// var currentUser = Parse.User.current();
// if (currentUser) {
//     $('login').hide()

// }