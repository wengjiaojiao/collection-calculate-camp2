'use strict';
var _ = require("../../mylodash.js");

function compute_average(collection) {
    return _.reduce(collection,sum)/collection.length;
}
function sum(a,b) {
    return a + b;
}
module.exports = compute_average;
