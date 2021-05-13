class Animal {
  static category = 'Dog';
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  static compare(animal1, animal2) {
    if (animal1.speed > animal2.speed) {
      return `${animal1.name} is faster`;
    }
    return `${animal2.name} is faster`;
  }
}

const doggo = new Animal('Kutta', 12);
const doggo2 = new Animal('Kutta2', 15);

console.log(Animal.compare(doggo, doggo2));
