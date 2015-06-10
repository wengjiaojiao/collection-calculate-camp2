'use strict';
var _  =require('../../mylodash.js');

function find_first_even(collection) {
    var first = _.filter(collection,function(n){
        if(n % 2 == 0) {
            return n;
        }
    })

    return _.reduce(first,function(a,b){
        return a;
    })
}



module.exports = find_first_even;
