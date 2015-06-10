'use strict';
var _ = require('../../mylodash.js');

function collect_all_even(collection) {


    return _.filter(collection,even);
}

function even(n) {
    if (n % 2 ==0) {
        return n;
    }
}
module.exports = collect_all_even;
