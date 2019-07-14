import Animal from './Animal';

function Dog(name) {
    Animal.call(this, name);
    this.age = 'adult';
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    return `Dog ${Animal.prototype.getName.apply(this)} is barking`
}

Dog.prototype.getAge = function () {
    return this.age;
}

export default Dog;