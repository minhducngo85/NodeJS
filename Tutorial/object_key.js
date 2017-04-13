var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { '0': 'a', '1': 'b', '2': 'c' };
var obj = null;

if (obj != null && obj != undefined) {
    console.log(Object.keys(obj)); // console: ['0', '1', '2']
    Object.keys(obj).forEach(function (key) {
        console.log(key + ': ' + obj[key]);
    });
} else {
    console.log("object = null");
}
//var object2 = Object.keys(obj).map(function(2) {
//});

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo is property which isn't enumerable
var myObj = Object.create({}, {
    getFoo: {
        value: function () { return this.foo; }
    }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']