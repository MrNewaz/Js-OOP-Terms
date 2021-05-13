class Hero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  getPower() {
    if (this.power) {
      return this.power;
    } else {
      return 'I have no power';
    }
  }
  getGrocery() {
    if (this.power) {
      console.log(this.getPower());
    }
    return 'Price too high';
  }
}

const catMan = new Hero('Batman', 'Deep Khamchi');

console.log(catMan.power);
console.log(catMan.getGrocery());
