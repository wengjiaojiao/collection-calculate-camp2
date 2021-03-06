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
    sum:function() {
        this.reduce(function(a, b) {
            return a + b;
        });
        return this;
    },
    max:function() {
        this.reduce(function(a, b) {
            var max;
            if(a < b) {
                max = b;
                return b;
            }else {
                max = a;
                return a;
            }
        });
        return this;
    },
    min:function() {
        this.reduce(function(a, b) {
            var min;
            if(a > b) {
                min = b;
                return b;
            }else {
                min = a;
                return a;
            }
        });
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
    rank:function(fun) {
        var number;
        for (var i = 0; i < this.collection.length; i++) {
            for (var j = i + 1; j < this.collection.length; j++) {
                if(fun(this.collection[i], this.collection[j])) {
                    number = this.collection[i];
                    this.collection[i] = this.collection[j];
                    this.collection[j] = number;
                }
            }
        }
        return this;
    },
    first:function(element) {
        var result = 0;
        var exist = true;
        this.each(function(n, i) {
            if(n === element && exist) {
                result = i;
                exist = false;
            }
        });
        return result;
    },
    last:function(element) {
        var result = true;
        this.each(function(n, i) {
            if(n === element) {
                result = i;
            }
        });
        return result;
    },
    median:function() {
        var median;
        var middle = parseInt(this.collection.length / 2);

        if(this.collection.length % 2 ===0) {
            median = (this.collection[middle] + this.collection[middle - 1]) / 2;
        }else {
            median = this.collection[middle];
        }
        return median;
    },
    value:function() {
        return this.collection;
    }
}

module.exports = _;
