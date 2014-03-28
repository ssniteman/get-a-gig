var MainRouter = Backbone.Router.extend({

    routes: {
        "": "homePage",
        "createaccount": "createAccount",
        "musicianprofile": "musicianProfile",
        "editmusicianprofile": "musicianProfileForm"
        "musicianprofile/": "savedMusicianProfile"
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

    musicianProfile: function() {
        new YourMusicianProfileView()

    },

    musicianProfileForm: function() {
        console.log('edit router')
        // new EditMusicianProfileView()
    },

    savedMusicianProfile: function() {
        new SavedMusicianProfileView()
    }

})