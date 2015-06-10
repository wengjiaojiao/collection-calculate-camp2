'use strict';
var single_element = function(collection){
    var result = [];

    var even = filter(collection, function(n, i) {
        return (i + 1) % 2 === 0;
    });
    var objectArray = [];

    for(var i = 0; i < even.length; i++) {
        var exist = false;

        for(var j = 0; j < objectArray.length; j++) {
            if(even[i] === objectArray[j].num) {
                objectArray[j].count++;
                exist = true;
            }
        }
        if(!exist) {
            objectArray.push({
                num : even[i],
                count : 1
            });
        }
    }

    each(objectArray, function(n,i) {
        if(n.count === 1) {
            result.push(n.num);
        }
    });
    return result;
}

module.exports = single_element;

function each(collection, fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i], i);
    }
}

function filter(collection, fun) {
    var result = [];

    each(collection, function(n, i) {
        if(fun(n, i)) {
            result.push(n);
        }
    });
    return result;
}

function exist(collection, element) {
    var result = true;

    each(collection, function(n) {
        if(n === element){
            result = false;
        }
    });
    return result;
}
