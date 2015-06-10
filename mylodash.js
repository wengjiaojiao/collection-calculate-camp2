
function _ () {

}

_.foreach = function(collection,fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i],i);
    }
}


_.map = function(collection,fun) {
    var result = [];

    _.foreach(collection,function(n) {
        result.push(fun(n));
    });
    return result;
}


_.exist = function(collection,element) {
    var result = false;

    _.foreach(collection,function(n){
        if(n === element) {
            result = true;
        }
    });
    return result;
}


_.filter = function(collection,fun) {
    var result = [] ;

    _.foreach(collection,function(n, i) {
        if(fun(n, i)) {
            result.push(n);
        }
    });
    return result;
}


_.reduce = function(collection,fun) {
    var result = collection[0];

    _.foreach(collection,function(n,i) {
        if(i === 0) {
            result = collection[i];
        }else {
            result = fun(result,n);
        }
    });
    return result;
}


_.rank = function(collection, fun) {
    var number;

    for (var i = 0; i < collection.length; i++) {
        for (var j = i + 1; j < collection.length; j++) {
            if(fun(collection[i], collection[j])) {
                number = collection[i];
                collection[i] = collection[j];
                collection[j] = number;
            }
        }
    }
    return collection;
}


_.range = function(a, b) {
    var step = Math.abs(b - a) / (b - a);
    var count = (b - a) / step;
    var result = [];

    for (var i = 0; i <= count; i++) {
        var item = a + i * step;
        result.push(item);
    }
    return result;
}


_.median = function(collection) {
    var median;
    var middle = parseInt(collection.length / 2);

    if(collection.length % 2 ===0) {
        median = (collection[middle] + collection[middle - 1]) / 2;
    }else {
        median = collection[middle];
    }
    return median;
}
module.exports = _;
