'use strict';
var _ = require("../../mylodash.js");

function collect_max_number(collection) {


    return _(collection).max().value();

}
module.exports = collect_max_number;
