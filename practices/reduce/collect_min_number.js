'use strict';
var _ = require("../../mylodash.js");

function collect_min_number(collection) {
    return _(collection).min().value();
}
module.exports = collect_min_number;
