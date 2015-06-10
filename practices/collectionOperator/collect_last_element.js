'use strict';
var _ = require('../../mylodash.js');

function collect_last_element(collection) {


    return _.reduce(collection,function(a,b){
        return b;
    })
}

module.exports = collect_last_element;













//var _ = require('../lodash/array');

//return _.last(collection);
