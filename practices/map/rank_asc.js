'use strict';
var _ = require('../../mylodash.js');

var rank_asc = function(collection){
    return _(collection).rank(function(a, b) {
        return a < b;
    }).value();
}

module.exports = rank_asc;
