// Factory Method Pattern (Creational)

/*

  Defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets 
  a class defer instantiation to subclasses

*/

interface Pizza {
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
}

class CheesePizza implements Pizza {
  prepare(): void {
    throw new Error('Method not implemented.');
  }
  bake(): void {
    throw new Error('Method not implemented.');
  }
  cut(): void {
    throw new Error('Method not implemented.');
  }
  box(): void {
    throw new Error('Method not implemented.');
  }
}

class PepperoniPizza implements Pizza {
  prepare(): void {
    throw new Error('Method not implemented.');
  }
  bake(): void {
    throw new Error('Method not implemented.');
  }
  cut(): void {
    throw new Error('Method not implemented.');
  }
  box(): void {
    throw new Error('Method not implemented.');
  }
}

class ClamPizza implements Pizza {
  prepare(): void {
    throw new Error('Method not implemented.');
  }
  bake(): void {
    throw new Error('Method not implemented.');
  }
  cut(): void {
    throw new Error('Method not implemented.');
  }
  box(): void {
    throw new Error('Method not implemented.');
  }
}

class SimplePizzaFactory {
  createPizza(type: string): Pizza | undefined {
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

abstract class PizzaStore {
  orderPizza(type: string) {
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

  abstract createPizza(type: string): Pizza;
}

class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    throw new Error('Method not implemented.');
  }
}

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    throw new Error('Method not implemented.');
  }
}
