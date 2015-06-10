function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}
_.prototype = {
    contructor:_,
    each:function(fun) {
        for (var i = 0; i < this.collection.length; i++) {
            fun(this.collection[i], i);
        }
    },
    map:function(fun) {
        var result = [];
        this.each(function(n) {
            result.push(fun(n));
        });
        this.collection = result;
        return this;
    },
    filter:function(fun) {
        var result = [];
        this.each(function(n, i) {
            if(fun(n, i)) {
                result.push(n);
            }
        });
        this.collection = result;
        return this;
    },
    reduce:function(fun) {
        var result = this.collection[0];
        this.each(function(n, i) {
            if(i === 0) {
                result = n;
            }else {
                result = fun(result,n);
            }
        });
        this.collection = result;
        return this;
    },
    range:function(a, b) {
        var step = Math.abs(b - a) / (b - a);
        var count = (b - a) / step;
        var result = [];
        for(var i = 0; i <= count; i++) {
            var item = a + i *step;
            result.push(item);
        }
        return result;
    },
    exist:function(element) {
        var result = false;
        this.each(function(n, i) {
            if(n === element) {
                result = true;
            }
        });
        return result;
    },
    value:function() {
        return this.collection;
    }
}

module.exports = _;
