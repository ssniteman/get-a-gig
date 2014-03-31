//////////////EDIT PROFILE VIEWS////////////////////

var EditMusicianProfileView = Parse.View.extend({

        renderedTemplate: _.template($('#musician-form-template').text()),

        events: {
            "click .save-musician-form": "saveProfile"
        },

        initialize: function() {
            console.log('form initializing')
            $('.content-container').html(this.el)
            this.render()

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

            var bandName = $('.musician-name-form').val();
            // var email = $('.musician-email-form').val();
            var city = $('.musician-city-form').val();
            var state = $('.musician-state-form').val();
            var genre = $('.musician-genre-form').val();
            var nightlyRate = $('.musician-nightly-rate-form').val();
            var availability = $('.musician-availability-form').val();

            // setting inputs into Parse as objects

            this.model.set('bandName', $('.musician-name-form').val());
            // this.model.set('email', $('.musician-email-form').val());
            this.model.set('city', $('.musician-city-form').val());
            this.model.set('state', $('.musician-state-form').find('.select2-choice').html())
            // this.model.set('genre', $('.musician-genre-form').find('.select2-search-choice').html(); 
            this.model.set('nightlyRate', $('.musician-nightly-rate-form').val()); 
            this.model.set('availability', $('.musician-availability-form').val());

                console.log('FORM is pushing to parse')

                this.model.save(null, {
                    success: function(musician) {
                        GG.me = musician;

                        router.navigate('musician/' + musician.get('username'), {
                            trigger: true
                        });
                    },
                    error: function(musician, error) {
                        // Show the error message somewhere and let the user try again.
                        alert("Error: " + error.code + " " + error.message);
                    }
                }); console.log('firing musician edit profile view')

            }

        });