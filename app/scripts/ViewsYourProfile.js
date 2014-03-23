//////////////Your Musician Profile View////////////////////

var YourMusicianProfileView = Parse.View.extend({

    renderedTemplate: _.template($('#your-musician-profile-template').text()),

    initialize: function() {
        $('.background-image-one').css('display', 'none');
        $('.logo-one').css('display', 'none');
        $('.profile-page-background').append(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    }
});