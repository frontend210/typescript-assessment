"use strict";
exports.__esModule = true;
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.collection = [];
    }
    MyArray.prototype.add = function (value) {
        if (typeof value !== 'string' && typeof value !== 'number') {
            return console.warn(typeof value + " " + value + " is given, string or number type only can be added!");
        }
        else if (this.collection.length > 0 && typeof this.collection[0] !== typeof value) {
            return console.warn(typeof value + " " + value + " is given, inconsistent value type!");
        }
        this.collection.push(value);
    };
    MyArray.prototype.remove = function (value) {
        this.collection = this.collection.filter(function (el) { return el !== value; });
    };
    MyArray.prototype.getValues = function () {
        return this.collection;
    };
    return MyArray;
}());
exports["default"] = MyArray;
