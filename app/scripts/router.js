var MainRouter = Backbone.Router.extend({

    routes: {
        "": "homePage",
        "create-account": "createAccount",
        "musician/:username": "musicianProfile",
        "profile/edit": "musicianProfileForm",
    },

    initialize: function() {
        console.log('a router is born')

    },

    homePage: function() {

        new SetUpView()

    },

    createAccount: function() {

        new CreateAccountView()

    },

    // logged in views

    createHeader: function() {
        if (!$('#header-template').length > 0) {

            var headerTemplate = _.template($('#header-template').text())
            
            $('.header-container').append(this.headerTemplate());
        }
    },

    musicianProfile: function(usernameFromUrl) {
        this.createHeader();
        var query = new Parse.Query(Parse.User);
        query.equalTo("username", usernameFromUrl); // find all the women
        query.first({
            success: function(musician) {
                // Do stuff
                new YourMusicianProfileView({
                    model: musician
                })
            }
        });


    },

    musicianProfileForm: function() {
        this.createHeader();
        console.log('edit router')

        if (Parse.User.current()) {
            console.log('woot')
            new EditMusicianProfileView({
                model: Parse.User.current()
            })
        } else {
            router.navigate("", {
                trigger: true
            });
        }
    },

    savedMusicianProfile: function() {
        this.createHeader();
        new SavedMusicianProfileView()
    }

})