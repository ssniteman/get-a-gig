var SignInView = Backbone.View.extend({

    createTemplate: _.template($('#sign-in-template').text()),


    initialize: function() {

        $('.container').prepend(this.el);

        this.render()

        $('.sign-in-btn').click(function() {
            $(this).addClass('active');
            $('.sign-in-drop').addClass('active');
            $('.create-account-btn').addClass('active');
            $('.enter-btn').addClass('active');


        });

    },

    render: function() {

        var renderedTemplate = this.createTemplate(this.model.attributes)

        this.$el.html(renderedTemplate);

    },


});