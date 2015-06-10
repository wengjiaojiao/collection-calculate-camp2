'use strict';
var _  =require('../../mylodash.js');

function find_last_even(collection) {
    var last = _.filter(collection,function(n){
        if(n % 2 == 0) {
            return n;
        }
    })

    return _.reduce(last,function(a,b){
        return b;
    })
}
module.exports = find_last_even;
