//////////////EDIT PROFILE VIEWS////////////////////

var EditMusicianProfileView = Parse.View.extend({

    renderedTemplate: _.template($('#musician-form-template').text()),

    events: {
        "click .save-musician-form": "saveProfile"
    },

    initialize: function() {
        console.log('form initializing')
        $('.musician-page-container').html(this.el)
        this.render()

        // put jquery select2 in here???
    },

    render: function() {
        this.$el.html(this.renderedTemplate())

        $(".e1").select2();
        console.log('it worked')

        $(".e23").select2({
            tags: ["folk", "country", "blues"],
            maximumInputLength: 0
        });

        $(".e24").select2({
            tags: ["weekdays", "weekends", ],
            maximumInputLength: 0
        });
        console.log('rendering edit profile from profile view')

    },

    saveProfile: function() {

        console.log('form pre push to parse')

        // capturing values that were inputed by musicians

        var musicbandname = $('.musician-name-form').val();
        var email = $('.musician-email-form').val();
        var city = $('.musician-city-form').val();
        var state = $('.musician-state-form').val();
        var genre = $('.musician-genre-form').val();
        var nightlyrate = $('.musician-nightly-rate-form').val();
        var availability = $('.musician-availability-form').val();

        // setting inputs into Parse as objects

        musician.set('musicbandname', $('.musician-name-form').val());
        musician.set('email', $('.musician-email-form').val());
        musician.set('city', $('.musician-city-form').val());
        musician.set('genre', $('.musician-genre-form').val());
        musician.set('nightlyrate', $('.musician-nightly-rate-form').val());
        musician.set('availability', $('.musician-availability-form').val());
        // musician.set('userType', "musician");


        console.log('FORM is pushing to parse')

        musician.signUp(null, {
            success: function(musician) {
                // window.location.href = '/#musicianprofile'
                new SavedMusicianProfileView({
                    model: musician
                })
            },
            error: function(musician, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });
        console.log('firing musician edit profile view')

    }

});