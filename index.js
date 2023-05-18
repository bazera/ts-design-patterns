"use strict";
class FlyWithWings {
    fly() {
        console.log('flying with wings');
    }
}
class FlyWithTail {
    fly() {
        console.log('flying with tail');
    }
}
class BasicQuack {
    quack() {
        console.log('basic quacking');
    }
}
class LoudQuack {
    quack() {
        console.log('loud quacking');
    }
}
class Duck {
    constructor() { }
    performQuack() {
        var _a;
        (_a = this.quackBehavior) === null || _a === void 0 ? void 0 : _a.quack();
    }
    performFly() {
        var _a;
        (_a = this.flyBehavior) === null || _a === void 0 ? void 0 : _a.fly();
    }
    swim() { }
    display() { }
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
mallardDuck.performFly();
