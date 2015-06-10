'use strict';
var _ = require("../../../../mylodash.js");

var is_exist_element = function(collection, element){
    var even = _.filter(collection,function(n,i) {
        return i % 2 === 0;
    });

    return _.exist(even, element);
}


module.exports = is_exist_element;
