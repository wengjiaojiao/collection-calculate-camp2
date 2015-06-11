'use strict';
var _ = require('../../mylodash.js');

function choose_even(collection) {
    return _(collection).filter(function(n) {
        return n % 2 ===0;
    }).value();
}
module.exports = choose_even;
