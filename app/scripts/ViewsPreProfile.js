////////////Start View/////////////

var SetUpView = Parse.View.extend({

    renderedTemplate: _.template($('#setupview-template').text()),

    className: 'account-page',

    events: {
        "click .sign-in-btn": "signIn",
        "click .create-account-btn": "createAccountView",
        "click .login-btn": "login"
    },

    initialize: function() {
        $('body').html(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    },

    signIn: function() {
        $('.sign-in-btn').addClass('active');
        $('.sign-in-drop').css('height', '145px');
        $('.create-account-btn').addClass('active');
    },

    login: function() {

        ///////// current users can login - goes to respective profile ///////

        Parse.User.logIn($('.musician-username').val(), $('.musician-password').val()), {
            success: function(user) {
                GG.me = user;

                if (user.get('userType') == 'musician') {
                    router.navigate('musician/' + user.get('username'), {
                        trigger: true
                    });
                } else {
                    router.navigate('venue/' + user.get('username'), {
                        trigger: true
                    });
                }

                console.log('created musician view based on sign in')

            },
            error: function(user, error) {
                // The login failed. Check error to see why.
            }
        };
    },

    createAccountView: function() {
        console.log('clicked create account')
        new CreateAccountView()
        console.log('rendered new create account view')
    }

});


/////////////////Create Account View/////////////////////////////

var CreateAccountView = Parse.View.extend({

    renderedTemplate: _.template($('#create-account-template').text()),

    events: {

        "click .save-button-musician": "musicianProfile",
        "click .save-button-bar": "barProfile"
    },

    initialize: function() {
        // $('.profile-page-background').css('display', 'none')
        $('.sign-in').html('');
        $('.create-account').html('');
        $('.container-two').html(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    },

    musicianProfile: function() {
        console.log('musician button firing function')
        var musician = new Parse.User();

        // capturing values that were inputed by musicians

        var username = $('.musician-username').val();
        var password = $('.musician-password').val();
        var verifyPassword = $('.musician-verify-password').val();

        // setting inputs into Parse as objects

        musician.set('username', $('.musician-username').val());
        musician.set('password', $('.musician-password').val());
        musician.set('verifyPassword', $('.musician-verify-password').val());

        musician.set('userType', "musician");

        musician.set('bandName', "Your Band Name");
        musician.set('city', "Your City");
        musician.set('genre', "Your Genre");
        musician.set('nightlyRate', "0");
        musician.set('availability', "");

        console.log('pushing to parse')

        musician.signUp(null, {
            success: function(musician) {
                GG.me = musician;
                // window.location.href = '/#musicianprofile'
                router.navigate('musician/' + musician.get('username'), {
                    trigger: true
                });
            },
            error: function(musician, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });


        console.log('firing your musician profile')
    },


    barProfile: function() {
        console.log('bar button firing')
        var bar = new Parse.User();

        // capturing values inputed by bar owners

        var name = $('.bar-name').val();
        var email = $('.bar-email').val();
        var username = $('.bar-username').val();
        var password = $('.bar-password').val();
        var verifyPassword = $('.bar-verify-password').val();
        var userType = "bar";

        // Setting inputs into Parse as objects  

        bar.set("name", $('.bar-name').val());
        bar.set("username", $('.bar-email').val());
        bar.set("password", $('.bar-password').val());
        bar.set("verifyPassword", $('.bar-verify-password').val());


        bar.signUp(null, {
            success: function(bar) {
                $('.bar-name').val('');
                $('.bar-location').val('');
                $('.bar-phone').val('');
                $('.bar-email').val('');
                $('.bar-user-name').val('');
                $('.bar-password').val('');
                $('.bar-verify-password').val('');

                new YourBarProfileView()

            },
            error: function(bar, error) {
                // Show the error message somewhere and let the bar try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });

    }
});