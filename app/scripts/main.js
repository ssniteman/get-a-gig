// saving musician sign-up to parse

$(function() {
    window.GG = {}
    Parse.initialize("3iYwTMywkleelnVUpiZdaXPPqVpvDsxw5qsJ1pev", "xLRITPtlktBrAiar3Xfk83Rs1isM23IbUHdXbr82");

    window.router = new MainRouter();
    Backbone.history.start();
});


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