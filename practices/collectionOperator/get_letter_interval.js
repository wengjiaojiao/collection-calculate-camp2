'use strict';
var _ = require('../../mylodash.js');
function get_letter_interval(number_a, number_b) {
    var result = [];

    if(number_a != number_b) {
        result = _().range(number_a, number_b);
    }else {
        result.push(number_a);
    }
    return _(result).map(function(n){
        return String.fromCharCode(n+96);
    }).value();
}


module.exports = get_letter_interval;
