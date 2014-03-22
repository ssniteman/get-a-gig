////////////Start View/////////////

var SetUpView = Parse.View.extend({

    renderedTemplate: _.template($('#setupview-template').text()),

    events: {
        "click .sign-in-btn": "login",
        "click .create-account-btn": "createAccountView"
    },

    initialize: function() {
        $('.container-two').append(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    },

    login: function() {
        $('.sign-in-btn').addClass('active');
        $('.sign-in-drop').css('height', '145px');
        $('.create-account-btn').addClass('active');
    },

    createAccountView: function() {
        console.log('clicked create account')
        new CreateAccountView()
    }

});


/////////////////Create Account View/////////////////////////////

var CreateAccountView = Parse.View.extend({

    renderedTemplate: _.template($('#create-account-template').text()),

    events: {

        "click .save-btn-musician": "musicianProfile",
        "click .save-btn-bar": "barProfile"
    },

    initialize: function() {
        $('.container-two').html(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    },

    musicianProfile: function() {
        new YourMusicianProfileView
    },

    barProfile: function() {
        new YourBarProfileView
    }

});

////////////////Your Musician Profile View////////////////////

var YourMusicianProfileView = Parse.View.extend({

    renderedTemplate: _.template($('#your-musician-profile-template').text()),



})