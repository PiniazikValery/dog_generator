function Animal(_name) {
    var name = _name;

    this.getName = function () {
        return name;
    }
}

export default Animal;