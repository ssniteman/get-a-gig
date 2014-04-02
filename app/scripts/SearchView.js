/////////// SEARCH VIEW //////////////////////

var SearchView = Parse.View.extend({

    renderedTemplate: _.template($('#search-view-template').text()),

    initialize: function() {
        $('.content-container').html(this.el)
        this.render()

        // Attempt at search functionality
        var userTypeQuery = new Parse.Query(Parse.User);

        if (window.searchOne) {
            console.log('value is', window.searchOne)
            userTypeQuery.equalTo('userType', window.searchOne)
            userTypeQuery.find({
                success: function(users) {
                    console.log(users)
                    _.each(users, function(user) {
                        new SearchListView({
                            model: user
                        })
                    })
                }
            })
        } else {
            alert("You're so wrong");
        }
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    }

});


///////// LIST VIEW ///////////////////////////

var SearchListView = Parse.View.extend({

    renderedTemplate: _.template($('#search-list-view-template').text()),

    initialize: function() {
        console.log('searchListView initializing');
        $('.musician-search-list').append(this.el)
        this.render()
    },

    render: function() {
        console.log('rendering SearchListView')
        this.$el.html(this.renderedTemplate())
    }

});






// if (window.searchType) {
//     console.log('value is', window.searchType)
//     var userTypeQuery = new Parse.Query(Parse.User);
//     userTypeQuery.equalTo('userType', window.searchType)
// }

// if (window.searchLocation) {
//     console.log('value is', window.searchLocation)
//     var userLocationQuery = new Parse.Query(Parse.User);
//     userLocationQuery.equalTo('userLocation', window.searchLocation)
// }

// if (window.searchGenre) {
//     console.log('value is', window.searchGenre)
//     var userGenreQuery = new Parse.Query(Parse.User);
//     userGenreQuery.equalTo('userGenre', window.searchGenre)
// }

// if (window.searchAvail) {
//     console.log('value is', window.searchAvail)
//     var userAvailQuery = new Parse.Query(Parse.User);
//     userAvailQuery.equalTo('userAvail', window.searchAvail)
// }

// var mainQuery = Parse.Query.or(userTypeQuery, userLocationQuery, userGenreQuery, userAvailQuery);
// mainQuery.find({
//     success: function(users) {
//         console.log(users)
//         _.each(users, function(user) {
//             new SearchListView({
//                 model: user
//             })
//         })
//     }
// })