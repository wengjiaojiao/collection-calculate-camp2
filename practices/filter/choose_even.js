'use strict';
var _ = require('../../mylodash.js');

function choose_even(collection) {


    return _.filter(collection,evens);
}

function evens(n) {
        return n % 2 == 0;
}
module.exports = choose_even;
















/*var evens = _.remove(collection, function(n) {
return n % 2 == 0;
});

return evens;
*/
