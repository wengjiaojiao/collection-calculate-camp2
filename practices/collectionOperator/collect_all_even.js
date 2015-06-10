'use strict';
var _ = require('../../mylodash.js');

function collect_all_even(collection) {

    return _(collection).filter(function(n) {
        return n % 2 === 0;
    }).value();
}

module.exports = collect_all_even;
