'use strict';
var _ = require('../../mylodash.js');

function choose_multiples_of_three(collection) {
    return _(collection).filter(function(n) {
        return n % 3 === 0;
    }).value();
}
module.exports = choose_multiples_of_three;
