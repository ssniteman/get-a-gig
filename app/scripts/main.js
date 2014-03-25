// saving musician sign-up to parse

$(function() {

    (function() {
        $(".e1").select2();
        console.log('it worked')
    }());


    $(".e23").select2({
        tags: ["folk", "country", "blues"],
        maximumInputLength: 0
    });

    $(".e24").select2({
        tags: ["weekdays", "weekends", ],
        maximumInputLength: 0
    });



    Parse.initialize("3iYwTMywkleelnVUpiZdaXPPqVpvDsxw5qsJ1pev", "xLRITPtlktBrAiar3Xfk83Rs1isM23IbUHdXbr82");

    window.router = new MainRouter();
    Backbone.history.start();
});

// $(document).ready(function() {
//     $("#e1").select2();



// sending info up to parse once ACCOUNT IS CREATED

// $('.save-button-musician').click(function() {
//     console.log('musician button firing function')
//     var musician = new Parse.User();

//     // capturing values that were inputed by musicians

//     var name = $('.musician-name').val();
//     var email = $('.musician-email').val();
//     var username = $('.musician-username').val();
//     var password = $('.musician-password').val();
//     var verifyPassword = $('.musician-verify-password').val();
//     var userType = "musician";

//     // setting inputs into Parse as objects

//     musician.set('name', $('.musician-name').val());
//     musician.set('email', $('.musician-email').val());
//     musician.set('username', $('.musician-username').val());
//     musician.set('password', $('.musician-password').val());
//     musician.set('verifyPassword', $('.musician-verify-password').val());
//     musician.set('userType', "musician");

//     console.log('pushing to parse')

//     musician.signUp(null, {
//         success: function(musician) {

//         },
//         error: function(musician, error) {
//             // Show the error message somewhere and let the user try again.
//             alert("Error: " + error.code + " " + error.message);
//         }
//     });
// });


// $('.save-button-bar').click(function() {
//     console.log('bar button firing')
//     var bar = new Parse.User();

//     // capturing values inputed by bar owners

//     var name = $('.bar-name').val();
//     var email = $('.bar-email').val();
//     var username = $('.bar-username').val();
//     var password = $('.bar-password').val();
//     var verifyPassword = $('.bar-verify-password').val();
//     var userType = "bar";

//     // Setting inputs into Parse as objects  

//     bar.set("name", $('.bar-name').val());
//     bar.set("username", $('.bar-email').val());
//     bar.set("password", $('.bar-password').val());
//     bar.set("verifyPassword", $('.bar-verify-password').val());


//     bar.signUp(null, {
//         success: function(bar) {
//             $('.bar-name').val('');
//             $('.bar-location').val('');
//             $('.bar-phone').val('');
//             $('.bar-email').val('');
//             $('.bar-user-name').val('');
//             $('.bar-password').val('');
//             $('.bar-verify-password').val('');
//         },
//         error: function(bar, error) {
//             // Show the error message somewhere and let the bar try again.
//             alert("Error: " + error.code + " " + error.message);
//         }
//     });
// });

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

//     user.attributes = {
//   musicianName: "jake"
// }

// user.attributes = {
//   barName: "cool bar"
// }