/////////// SEARCH VIEW //////////////////////

var SearchView = Parse.View.extend({

    renderedTemplate: _.template($('#search-view-template').text()),

    initialize: function() {
        $('.content-container').html(this.el)
        this.render()
    },

    render: function() {
        this.$el.html(this.renderedTemplate())
    }

});