function Animal(_name) {
    this.name = _name;
}

Animal.prototype.getName = function () {
    return this.name;
}

export default Animal;
