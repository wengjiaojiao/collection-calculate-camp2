'use strict';

function double_to_one(collection) {
    var all = [];

    for(var i= 0; i < collection.length; i++) {
        for(var j = 0; j < collection[i].length; j++) {
            all.push(collection[i][j]);
        }
    }
    var no_repeat = [];

    for(var x = 0; x < all.length; x++) {
        var exist = false;

        for(var y = 0; y < no_repeat.length; y++) {
            if(all[x] === no_repeat[y]) {
                exist = true;
            }
        }
        if(!exist) {
        no_repeat.push(all[x]);
        }
    }
    return no_repeat;
}




module.exports = double_to_one;


//    var expand = _.flatten(collection);
//  return _.uniq(expand);
