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





//     if (value of input is "musician") {
//         musicianQuery.equalTo('userType', 'musician')
//     } else {

//     }

//     if (value of input is "musician") {
//         musicianQuery.equalTo('userType', 'musician')
//     } else {

//     }

//     if (value of input is "musician") {
//         musicianQuery.equalTo('userType', 'musician')
//     } else {

//     }

//     musicianQuery.find({
//             success: function(musicians) {

//             })
//     }
// })

// });

// } else {
//     router.navigate('venue/' + user.get('username'), {
//         trigger: true
//     });
// }





// var musicianQuery = new Parse.Query('Musician');
// musicianQuery.equalTo('userType', 'musician')
// musician.find({
//     success: function(musicians) {
//         _.each(musicians, function(musician) {
//             model: musician
//         })
//     }
// })
// },