// Decorator Pattern (Structural)

/*

Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

*/

abstract class Beverage {
  description: string = 'Unknown Beverage';

  getDescription() {
    return this.description;
  }

  abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
  beverage!: Beverage;

  abstract getDescription(): string;
}

// Coffee Types

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Expresso';
  }

  cost(): number {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'HouseBlend';
  }

  cost(): number {
    return 0.89;
  }
}

// Condiments

class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Milk';
  }

  cost(): number {
    return this.beverage.cost() + 0.3;
  }
}

const beverage = new Espresso();
console.log(`${beverage.getDescription()}: $${beverage.cost()}`);

const beverage2 = new HouseBlend();
console.log(`${beverage2.getDescription()}: $${beverage2.cost()}`);

const beverage3 = new Mocha(new HouseBlend());
console.log(`${beverage3.getDescription()}: $${beverage3.cost()}`);

const beverage4 = new Milk(new Mocha(new Espresso()));
console.log(`${beverage4.getDescription()}: $${beverage4.cost()}`);
