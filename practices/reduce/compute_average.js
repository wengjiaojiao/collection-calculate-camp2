'use strict';
var _ = require("../../mylodash.js");

function compute_average(collection) {
    return _(collection).sum().value()/collection.length;
}
module.exports = compute_average;
