/////////// SEARCH VIEW //////////////////////

var SearchView = Parse.View.extend({

        renderedTemplate: _.template($('#search-view-template').text()),

        initialize: function() {
            $('.content-container').html(this.el)
            this.render()

            render: function() {
                this.$el.html(this.renderedTemplate())
            }

        });


    ///////// LIST VIEW ///////////////////////////

    var SearchListView = Parse.View.extend({

        renderedTemplate: _.template($('#search-list-view-template').text()),

        initialize: function() {
            $('musician-search-list').append(this.el)
            this.render()
        },

        render: function() {
            this.$el.html(this.renderedTemplate())
        }


    })


    // Attempt at search functionality
    var userTypeQuery = new Parse.Query(Parse.User);

    if ($('.musician-search-btn').length > 0) {
        userTypeQuery.equalTo('userType', $('.musician-search-btn').find('.select2-choices').html())
        userTypeQuery.find({
            success: function(users) {
                _.each(users, function(userType) {
                    new SearchListView({
                        model: this.model
                    })
                })
            }
        })
    } else {
        alert("You're so wrong");
    }







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