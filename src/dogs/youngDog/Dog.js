import Animal from './Animal';

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.age = 'young';
    }

    getAge() {
        return this.age;
    }

    bark() {
        return `Dog ${super.getName()} is barking`;
    }
}

export default Dog;