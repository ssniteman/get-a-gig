//////////////Your Musician Profile View////////////////////

var YourMusicianProfileView = Parse.View.extend({

    renderedTemplate: _.template($('#your-musician-profile-template').text()),

    events: {
        "click .section-search-btn": "searchProfiles",
        "click .musician-search-btn": "musicianVenue"
    },

    initialize: function() {
        console.log('musician profile initializing')
        $('.content-container').html(this.el)
        this.render();
        console.log('musician profile rendering')

        $(".musician-search-btn").change(function() {
            window.searchOne = $(this).val();
        })

        $(".location-search-btn").change(function() {
            window.searchTwo = $(this).val();
        })

        $(".genre-search-btn").change(function() {
            window.searchThree = $(this).val();
        })

        $("availability-search-btn").change(function() {
            window.searchFour = $(this).val();
        })

    },
    

    render: function() {
        console.log('did it actually render?')
        this.$el.html(this.renderedTemplate())

        // $(".musician-search-btn").select2({
        //     tags: ["musician", "venue"],
        //     maximumInputLength: 0
        // });

        // $(".location-search-btn").select2({
        //     tags: ["Merica", "South Carolina"],
        //     maximumInputLength: 0
        // });

    },

    searchProfiles: function() {
        router.navigate('search', {
            trigger: true
        });
        console.log('search profile router triggering')
    },

    musicianVenue: function() {
        $('.musician-search-btn').addClass('active');
    }
});