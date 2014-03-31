//////////////Your Musician Profile View////////////////////

var YourMusicianProfileView = Parse.View.extend({

    renderedTemplate: _.template($('#your-musician-profile-template').text()),

    events: {
        "click .section-search-btn": "searchProfiles"
    },

    initialize: function() {
        console.log('musician profile initializing')
        $('.content-container').html(this.el)
        this.render()
        console.log('musician profile rendering')
    },

    render: function() {
        console.log('did it actually render?')
        this.$el.html(this.renderedTemplate())

        $(".musician-search-btn").select2({
            tags: ["musician", "venue"],
            maximumInputLength: 0
        });

    },

    searchProfiles: function() {
        router.navigate('search', {
            trigger: true
        });
        console.log('search profile router triggering')
    }
});