//////////////Your Musician Profile View////////////////////

var YourMusicianProfileView = Parse.View.extend({

    renderedTemplate: _.template($('#your-musician-profile-template').text()),

    initialize: function() {
        console.log('musician profile initializing')
        // $('.background-image-one').css('display', 'none');
        // $('.logo-one').css('display', 'none');
        $('.profile-page-background').css('display');
        $('.profile-page-background').html(this.el)
        this.render()
        console.log('musician profile rendering')
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    }
});