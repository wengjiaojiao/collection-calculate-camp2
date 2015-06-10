'use strict';
var _ = require('../../mylodash.js');
function get_integer_interval(number_a, number_b) {
    var result = [];

    if(number_a != number_b) {
        result = _().range(number_a, number_b);
    }else {
        result.push(number_a);
    }
    return result;
}

module.exports = get_integer_interval;
