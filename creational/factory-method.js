"use strict";
// Factory Method Pattern (Creational)
class CheesePizza {
    prepare() {
        throw new Error('Method not implemented.');
    }
    bake() {
        throw new Error('Method not implemented.');
    }
    cut() {
        throw new Error('Method not implemented.');
    }
    box() {
        throw new Error('Method not implemented.');
    }
}
class PepperoniPizza {
    prepare() {
        throw new Error('Method not implemented.');
    }
    bake() {
        throw new Error('Method not implemented.');
    }
    cut() {
        throw new Error('Method not implemented.');
    }
    box() {
        throw new Error('Method not implemented.');
    }
}
class ClamPizza {
    prepare() {
        throw new Error('Method not implemented.');
    }
    bake() {
        throw new Error('Method not implemented.');
    }
    cut() {
        throw new Error('Method not implemented.');
    }
    box() {
        throw new Error('Method not implemented.');
    }
}
class SimplePizzaFactory {
    createPizza(type) {
        switch (type) {
            case 'cheese': {
                return new CheesePizza();
            }
            case 'pepperoni': {
                return new PepperoniPizza();
            }
            case 'clam': {
                return new ClamPizza();
            }
        }
    }
}
class PizzaStore {
    orderPizza(type) {
        const pizza = this.createPizza(type);
        if (!pizza) {
            return;
        }
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
class NYPizzaStore extends PizzaStore {
    createPizza(type) {
        throw new Error('Method not implemented.');
    }
}
class ChicagoPizzaStore extends PizzaStore {
    createPizza(type) {
        throw new Error('Method not implemented.');
    }
}
