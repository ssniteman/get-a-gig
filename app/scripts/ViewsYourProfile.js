//////////////Your Musician Profile View////////////////////

var YourMusicianProfileView = Parse.View.extend({

    renderedTemplate: _.template($('#your-musician-profile-template').text()),

    events: {
        "click .edit-button": "musicianForm"
    },

    initialize: function() {
        console.log('musician profile initializing')
        $('body').html(this.el)
        this.render()
        console.log('musician profile rendering')
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    },

    musicianForm: function() {
        // (function() {
        //     $(".e1").select2();
        //     console.log('it worked')
        // }());

        // $(".e23").select2({
        //     tags: ["folk", "country", "blues"],
        //     maximumInputLength: 0
        // });

        // $(".e24").select2({
        //     tags: ["weekdays", "weekends", ],
        //     maximumInputLength: 0
        // });


        // $(".e1").select2();
        // console.log('it worked')

        // $(".e23").select2({
        //     tags: ["folk", "country", "blues"],
        //     maximumInputLength: 0
        // });

        // $(".e24").select2({
        //     tags: ["weekdays", "weekends", ],
        //     maximumInputLength: 0
        // });
        // console.log('rendering edit profile from profile view')

        new EditMusicianProfileView()
    }
});