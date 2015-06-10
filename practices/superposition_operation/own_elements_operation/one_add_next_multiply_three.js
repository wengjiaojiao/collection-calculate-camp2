'use strict';
function one_add_next_multiply_three(collection){
    var temp = [];
    
    for (var i = 0; i < collection.length; i++) {
        if(i < collection.length -1) {
            temp[i] = (collection[i] + collection[i+1]) * 3;
        }
    }
    return temp;
}
module.exports = one_add_next_multiply_three;
