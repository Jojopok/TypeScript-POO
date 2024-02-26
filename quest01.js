var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log('I am ' + this.name);
    };
    Person.prototype.tellMyAge = function () {
        console.log('I am ' + this.age + 'years old');
    };
    return Person;
}());
var john = new Person("John", 40);
var marie = new Person("Marie", 35);
john.tellMyName();
john.tellMyAge();
marie.tellMyName();
marie.tellMyAge();
