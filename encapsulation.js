class Tiger {
  #speed = 100;
  constructor(name) {
    this.name = name;
    this.#speed = 500;
  }
  run() {
    console.log(`${this.name} is running at ${this.#speed} kmh......`);
  }
}

const royal = new Tiger('Royal Bengal');

royal.name = 'Hoga Tiger';

royal.run();
