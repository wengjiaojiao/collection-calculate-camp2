'use strict';
var _ = require('../../mylodash.js');

function calculate_elements_sum(collection) {
    return _.reduce(collection,sum);
}

function sum (a,b) {
    return a+b;
}

module.exports = calculate_elements_sum;
