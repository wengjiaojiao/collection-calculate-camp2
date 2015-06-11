'use strict';
var _ = require("../../mylodash.js");
function choose_no_repeat_number(collection) {
    var result = [];

    _(collection).each(function(n){
        if(!_(result).exist(n)) {
            result.push(n);
        }
    });
    return result;
}

module.exports = choose_no_repeat_number;
