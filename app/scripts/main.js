// saving musician sign-up to parse

$(function() {

    window.GG = {}

    Parse.initialize("3iYwTMywkleelnVUpiZdaXPPqVpvDsxw5qsJ1pev", "xLRITPtlktBrAiar3Xfk83Rs1isM23IbUHdXbr82");

    window.router = new MainRouter();
    Backbone.history.start();
});