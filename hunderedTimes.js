"use strict";
exports.__esModule = true;
var cachedResults = new Set();
var hundredTimes = function (param) {
    return 0;
};
console.log(hundredTimes(1));
//=> 100
console.log(hundredTimes(1)); // cached result should be retunrned intead of calculating again.
//=> 100
console.log(hundredTimes(2));
//=> 200
console.log(hundredTimes(2)); // the same thing for this.
//=> 200
console.log(hundredTimes(1)); // cached result should be returned again.
//=> 100
exports["default"] = hundredTimes;
