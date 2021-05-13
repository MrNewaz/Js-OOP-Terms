class PenDrive {
  constructor(capacity, color, price) {
    this.capacity = capacity;
    this.color = color;
    this.price = price;
  }
}

const ignite = new PenDrive('36gb', 'white', 1300);

function StickyNote(color, price) {
  this.color = color;
  this.price = price;
}

const yellow = new StickyNote('yellow', 15);

console.log(ignite);

console.log(yellow);
