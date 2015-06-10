'use strict';
var _ =require("../../../mylodash.js");

function average_to_letter(collection) {
    var sum = _.reduce(collection,function(a,b){
        return a + b;
    });

    var aver = Math.ceil(sum / collection.length);
    var letter = String.fromCharCode(aver+96);

    return letter;
}


module.exports = average_to_letter;
