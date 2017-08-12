Array.prototype.compact = function() {
    let array = this;
    let n = [];
    let j = 0;
    for(let i of array) {
        if(i) n.push(i);
    }
    return n;
}

console.log([0, false, undefined, 24, 'dfa', "", 0, 4].compact());