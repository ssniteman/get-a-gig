//////////////EDIT PROFILE VIEWS////////////////////

var EditMusicianProfileView = Parse.View.extend({

    renderedTemplate: _.template($('#musician-form-template').text());

    events: {
        "click .save-musician-form": "editProfile"
    }

    initialize: function() {
        $('body').html(this.el)
        this.render()

        // put jquery select2 in here???
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    },

    editProfile: function() {

        // capturing values that were inputed by musicians

        var musicbandname = $('.musician-name-form').val();
        var email = $('.musician-email-form').val();
        var city = $('.musician-city-form').val();
        var state = $('.musician-state-form').val();
        var genre = $('.musician-genre-form').val();
        var nightlyrate = $('.musician-nightly-rate-form').val();
        var availability = $('.musician-availability-form').val();

        // setting inputs into Parse as objects



    }


})