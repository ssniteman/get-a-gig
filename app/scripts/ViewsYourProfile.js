//////////////Your Musician Profile View////////////////////

var YourMusicianProfileView = Parse.View.extend({

    renderedTemplate: _.template($('#your-musician-profile-template').text()),

    initialize: function() {
        console.log('musician profile initializing')
        $('.content-container').html(this.el)
        this.render()
        console.log('musician profile rendering')
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    }
});