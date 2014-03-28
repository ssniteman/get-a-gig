var MainRouter = Backbone.Router.extend({

    routes: {
        "": "homePage",
        "create-account": "createAccount",
        "musician/:username": "musicianProfile",
        "profile/edit": "musicianProfileForm",
        // "musician-profile/": "savedMusicianProfile"
    },

    initialize: function() {
        console.log('a router is born')

    },

    homePage: function() {

        // if (Parse.User.current(musician)) {
        //     new YourMusicianProfileView();
        // } else {
        new SetUpView()

        // },

        // if (Parse.User.current(bar)) {
        //     new YourBarProfileView();
        // } else {
        //     new SetUpView()
        // }
    },

    createAccount: function() {

        new CreateAccountView()

    },

    // logged in views

    createHeader: function() {
        if (!$('#header').length > 0) {
            $('.header-container').append('header should go here');
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