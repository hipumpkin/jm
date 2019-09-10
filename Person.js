import { min } from './util';
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`hi, i am ${this.name}, i am ${min(1, 4)}`);
    }
}

const p = new Person('caicai');
p.sayHi();