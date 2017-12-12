/**
 * Created by I067382 on 8/30/2016.
 */

'use strict';

class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}

console.log(Student.prototype);
console.log(Student.__proto__);
let test = new Student();
console.log(test.prototype);
console.log(test.__proto__);


const m1 = require('./m1');
console.log(m1.set(2));
const m2 = require('./m1');
console.log(m2.get());