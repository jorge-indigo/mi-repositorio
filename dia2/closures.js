function ejemploClosure() {
    var x = 0;
    return function () { return ++x; } // Closure
}

var f = ejemploClosure();

console.log("typeof f is", typeof f);

console.log("f() is", f());
console.log("f() is", f());
console.log("f() is", f());
console.log("f() is", f());
console.log("f() is", f());
console.log("f() is", f());
console.log("f() is", f());
console.log("f() is", f());
console.log("f() is", f());