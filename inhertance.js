class SmartDevice {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  charging() {
    console.log('charging');
  }
}

class Phone extends SmartDevice {
  constructor(name, price, camera) {
    super(name, price);
    this.camera = camera;
  }
}

class Watch extends SmartDevice {
  constructor(name, price, distance) {
    super(name, price);
    this.distance = distance;
  }
}

class Tablet extends SmartDevice {
  constructor(name, price, isWifi) {
    super(name, price);
    this.isWifi = isWifi;
  }
}

const samsung = new Phone('Samsung', 50, '40mp');

console.log(samsung.charging());
