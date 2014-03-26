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

        var bandname = $('.musician-name-form').val();
        var
    }


})