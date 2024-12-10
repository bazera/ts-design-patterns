"use strict";
// Decorator Pattern (Structural)
/*

Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

*/
class Beverage {
    constructor() {
        this.description = 'Unknown Beverage';
    }
    getDescription() {
        return this.description;
    }
}
class CondimentDecorator extends Beverage {
}
// Coffee Types
class Espresso extends Beverage {
    constructor() {
        super();
        this.description = 'Expresso';
    }
    cost() {
        return 1.99;
    }
}
class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = 'HouseBlend';
    }
    cost() {
        return 0.89;
    }
}
// Condiments
class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ', Mocha';
    }
    cost() {
        return this.beverage.cost() + 0.2;
    }
}
class Milk extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ', Milk';
    }
    cost() {
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
