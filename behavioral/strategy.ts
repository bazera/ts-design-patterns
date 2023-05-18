interface FlyBehavior {
  fly: () => void;
}

// Strategy Pattern (Behavioral)

/*

Defines a family of algorithms, encapsulates each one, and makes them intercahngeable. Strategy lets the algorithm vary independently from clients that use it.

*/

interface QuackBehavior {
  quack: () => void;
}

class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('flying with wings');
  }
}

class FlyWithTail implements FlyBehavior {
  fly() {
    console.log('flying with tail');
  }
}

class BasicQuack implements QuackBehavior {
  quack() {
    console.log('basic quacking');
  }
}

class LoudQuack implements QuackBehavior {
  quack() {
    console.log('loud quacking');
  }
}

abstract class Duck {
  flyBehavior: FlyBehavior | undefined;
  quackBehavior: QuackBehavior | undefined;

  constructor() {}

  performQuack() {
    this.quackBehavior?.quack();
  }

  performFly() {
    this.flyBehavior?.fly();
  }

  swim() {}

  display() {}
}

class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithTail();
    this.quackBehavior = new LoudQuack();
  }
}

const mallardDuck = new MallardDuck();
mallardDuck.performFly();
mallardDuck.flyBehavior = new FlyWithWings();
mallardDuck.performFly();
