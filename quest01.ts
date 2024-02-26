class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName(): void {
        console.log('I am ' + this.name);
    }

    tellMyAge(): void {
        console.log('I am '  + this.age + 'years old');
    }
}

const john = new Person("John", 40);
const marie = new Person("Marie", 35);

john.tellMyName();
john.tellMyAge();

marie.tellMyName();
marie.tellMyAge();
