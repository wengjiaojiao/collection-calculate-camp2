'use strict';
var _ = require('../../mylodash.js');

function collect_last_element(collection) {


    return _(collection).reduce(function(a,b){
        return b;
    }).value();
}

module.exports = collect_last_element;













//var _ = require('../lodash/array');

//return _.last(collection);
