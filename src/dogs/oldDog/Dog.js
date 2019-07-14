import Animal from './Animal';

function Dog(name) {
    var age = 'old';

    Animal.call(this, name);

    this.getAge = function () {
        return age;
    }

    this.bark = function () {
        return `Dog ${this.getName()} is barking`;
    }
}

export default Dog;