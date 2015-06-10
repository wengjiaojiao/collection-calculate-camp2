'use strict';
var _ = require("../../mylodash.js");

function collect_min_number(collection) {
    return _.reduce(collection,min);
}

function min(a,b) {
    return Math.min(a,b);
}
module.exports = collect_min_number;
