class Animal {
  constructor() {}
  talk() {
    throw new Error('implement something');
  }
}

class Cat extends Animal {
  talk() {
    console.log('Meow Meow');
  }
}

class Dog extends Animal {
  talks() {
    console.log('Bark Bark');
  }
  talk() {
    console.log('Bark Bark');
  }
}

const myCat = new Cat();
myCat.talk();
const myDog = new Dog();
myDog.talk();
