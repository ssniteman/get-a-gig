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
var musicianQuery = new Parse.Query('Musician');

if (value of input is "musician") {
    musicianQuery.equalTo('userType', 'musician')
} else {

}

if (value of input is "musician") {
    musicianQuery.equalTo('userType', 'musician')
} else {

}

if (value of input is "musician") {
    musicianQuery.equalTo('userType', 'musician')
} else {

}

if (value of input is "musician") {
    musicianQuery.equalTo('userType', 'musician')
} else {

}

musicianQuery.find({
        success: function(musicians) {

        })
}
})

});

// } else {
//     router.navigate('venue/' + user.get('username'), {
//         trigger: true
//     });
// }