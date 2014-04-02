//////////////Your Musician Profile View////////////////////

var YourMusicianProfileView = Parse.View.extend({

    renderedTemplate: _.template($('#your-musician-profile-template').text()),

    events: {
        "click .section-search-btn": "searchProfiles",
        "click .musician-search-btn": "locationOne",
        "click .location-search-btn": "locationTwo",
        "click .genre-search-btn": "locationThree",
        "click .availability-search-btn": "locationFour"
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

        $(".e25").select2({
            tags: ["musician", "venue"],
            maximumInputLength: 0
        });

        $(".e26").select2({
            tags: ["Merica", "South Carolina"],
            maximumInputLength: 0
        });

        $(".e27").select2({
            tags: ["Folk", "Country", "Rock", "Blues", "R & B", "Celtic", "Rap", "Metal"],
            maximumInputLength: 0
        });

        $(".e28").select2({
            tags: ["Weekdays", "Weekends"],
            maximumInputLength: 0
        });

    },

    searchProfiles: function() {
        router.navigate('search', {
            trigger: true
        });
        console.log('search profile router triggering')
    },

    locationOne: function() {
        $('.location-one').toggleClass('active')    
    },

    locationTwo: function() {
        $('.location-two').toggleClass('active')
    },

    locationThree: function() {
        $('.location-three').toggleClass('active')
    },

    locationFour: function() {
        $('.location-four').toggleClass('active')
    }

});