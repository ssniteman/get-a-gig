var MainRouter = Backbone.Router.extend({

    routes: {
        "": "homePage"
    },

    initialize: function() {
        console.log('a router is born')

    },

    homePage: function() {
        new SetUpView()
    }

})