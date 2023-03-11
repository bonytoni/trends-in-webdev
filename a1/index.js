"use strict";
// QUESTION 1 ------------------------------------------------------------------
exports.__esModule = true;
exports.makeSentences = exports.evenEven = exports.affordableHousing = exports.arrayMean = void 0;
var arrayMean = function (array) {
    if (array.length != 0) {
        return array.reduce(function (sum, curr) { return sum + curr; }) / array.length;
    }
    return undefined;
};
exports.arrayMean = arrayMean;
console.log((0, exports.arrayMean)([1, 2, 3, 4, 5])); // 3
console.log((0, exports.arrayMean)([])); // undefined
var affordableHousing = function (listings, budget) {
    var apts = listings.filter(function (apt) { return apt.rent <= budget; });
    return apts.map(function (apt) { return apt.id; });
};
exports.affordableHousing = affordableHousing;
var apts = [
    { id: 'orbis', rent: 5000 },
    { id: 'ereve', rent: 12345 },
    { id: 'henesys', rent: 1337 },
];
console.log((0, exports.affordableHousing)(apts, 5000)); // ['orbis', 'henesys']
console.log((0, exports.affordableHousing)(apts, 4000)); // ['henesys']
// QUESTION 3 ------------------------------------------------------------------
var evenEven = function (array) {
    if (array != undefined) {
        var evenStrings = array.filter(function (str) { return str.length % 2 == 0; });
        if (evenStrings.length != 0)
            return evenStrings.every(function (str) { return str.indexOf('even') != -1; });
    }
    return true;
};
exports.evenEven = evenEven;
console.log((0, exports.evenEven)()); // true
console.log((0, exports.evenEven)([])); // true
console.log((0, exports.evenEven)(['bob'])); // true
console.log((0, exports.evenEven)(['bob', 'steven'])); // true
console.log((0, exports.evenEven)(['bob', 'steven', 'even'])); // true
console.log((0, exports.evenEven)(['bob', 'steven', 'anna'])); // false
var makeSentences = function (array) {
    return array.map(function (_a) {
        var name = _a.name, age = _a.age, breed = _a.breed;
        return name + ' is ' + (age).toFixed(1) + ' years old and is a ' + breed;
    });
};
exports.makeSentences = makeSentences;
var doggos = [
    { name: 'Sparky', age: 3.35, breed: 'Pomeranian Husky' },
    { name: 'Oreo', age: 5.42, breed: 'Dalmatian' },
    { name: 'Stella', age: 4, breed: 'Alaskan Klee Kai' },
];
console.log((0, exports.makeSentences)(doggos));
// [
//     'Sparky is 3.4 years old and is a Pomeranian Husky',
//     'Oreo is 5.4 years old and is a Dalmatian',
//     'Stella is 4.0 years old and is a Alaskan Klee Kai',
// ];
