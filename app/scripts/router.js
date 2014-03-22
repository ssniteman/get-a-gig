var MainRouter = Backbone.Router.extend({

        routes: {
            "": "homePage",
            "createaccount": "createAccount"
        },

        initialize: function() {
            console.log('a router is born')

        },

        homePage: function() {

        // if (Parse.User.current(musician)) {
        //     new YourMusicianProfileView();
        //     new YourBarProfileView

                // } else {
                new SetUpView()

                // }
            },

            createAccount: function() {

                new CreateAccountView()

            }

        })