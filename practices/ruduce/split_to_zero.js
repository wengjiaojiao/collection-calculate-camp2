'use strict';

function spilt_to_zero(number, interval) {
    var result = [];
    result.push(number);
    var count = number / interval;

    if(number % interval != 0) {
        count = parseInt(count) + 1;
    }

    for (var i = 1;i <= count; i++) {
        var number_s = (number - interval).toFixed(1);
        var number = Number(number_s);
        result.push(number);
    }
    return result;
}

module.exports = spilt_to_zero;
