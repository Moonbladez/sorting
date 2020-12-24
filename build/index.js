"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        //length of collection
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            //second loop minus value at the end as that will be the highest
            for (var j = 0; j < length - i - i; j++) {
                //compare left hand side to right hand side
                if (this.collection[j] > this.collection[j + 1]) {
                    //swap numbers
                    var leftHandSide = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHandSide;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
