/////////// SEARCH VIEW //////////////////////

var SearchView = Parse.View.extend({

    renderedTemplate: _.template($('#search-view-template').text()),

    initialize: function() {
        $('.content-container').html(this.el)
        this.render()

        var musicianQuery = new Parse.Query('Musician');
        musicianQuery.equalTo('userType', 'musician')
        musician.find({
            success: function(musicians) {
                _.each(musicians, function(musician) {
                    model: musician
                })
            }
        })
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    }

});




// Attempt at search functionality


// if (value of input is "musician") {

//     var musicianQuery = new Parse.Query('Musician');
//     musicianQuery.equalTo('userType', 'musician')
//     musician.find({
//         success: function(musicians) {
//             _.each(musicians, function(musician) {
//                 model: musician
//             })
//         }
//     })

// });

// } else {
//     router.navigate('venue/' + user.get('username'), {
//         trigger: true
//     });
// }