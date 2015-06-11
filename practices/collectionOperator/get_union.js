'use strict';

function get_union(collection_a, collection_b) {
    var result = collection_a;

    _(collection_b).each(function(n) {
        if(!_(result).exist(n)) {
            result.push(n);
        }
    });
    return result;
}

module.exports = get_union;

function _ (collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}

_.prototype = {
    contructor:_,
    each:function(fun) {
        for (var i = 0; i < this.collection.length; i++) {
            fun(this.collection[i]);
        }
    },
    exist:function(element) {
        var result = false;
        this.each(function(n, i) {
            if(n === element) {
                result = true;
            }
        });
        return result;
    },
    value:function() {
        return this.collection;
    }
}
