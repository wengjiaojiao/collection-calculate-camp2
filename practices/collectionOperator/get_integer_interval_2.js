'use strict';
var _ = require('../../mylodash.js');
function get_integer_interval_2(number_a, number_b) {
    var result = [];

    if(number_a != number_b) {
        result = _().range(number_a, number_b);
    }else {
        result.push(number_a);
    }

    return _(result).filter(function(n, i) {
        return n % 2 === 0;
    }).value();
}


module.exports = get_integer_interval_2;
