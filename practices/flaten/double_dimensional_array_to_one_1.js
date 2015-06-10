'use strict';

function double_to_one(collection) {
    var all = [];
    
    for(var i= 0; i < collection.length; i++) {
        if(collection[i].length == undefined) {
            all.push(collection[i]);
        }
        for(var j = 0; j < collection[i].length; j++) {
            all.push(collection[i][j]);
        }
    }
    return all;
}

module.exports = double_to_one;





//return _.flatten(collection);
