////////////Start View/////////////

var SetUpView = Parse.View.extend({

    renderedTemplate: _.template($('#setupview-template').text()),

    events: {
        "click .sign-in-btn": "login",
        "click .create-account-btn": "createAccountView"
    },

    initialize: function() {
        $('.container').append(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    },

    login: function() {
        $('.sign-in-btn').click(function() {
            $(this).addClass('active');
            $('.sign-in-drop').css('height', '145px');
            $('.create-account-btn').addClass('active');
        });

    },

    createAccountView: function() {
        new CreateAccountView()
    }

})