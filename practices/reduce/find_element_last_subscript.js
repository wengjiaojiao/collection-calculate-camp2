'use strict';
var _ = require("../../mylodash.js");

function calculate_elements_sum(collection, element) {
    return _(collection).last(element);
}


module.exports = calculate_elements_sum;
