'use strict';
var _ = require("../../mylodash.js");

function collect_max_number(collection) {


    return _.reduce(collection,max);
}

function max(a,b) {
    return Math.max(a,b);
}
module.exports = collect_max_number;
