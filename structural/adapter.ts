// Adapter Pattern (Structural)

/*



*/

interface Duckk {
  quack(): void;
  fly(): void;
}

interface Turkey {
  gobble(): void;
  fly(): void;
}

class AlabioDuck implements Duckk {
  quack() {
    console.log('quack');
  }

  fly() {
    console.log(`i'm flying`);
  }
}

class WildTurkey implements Turkey {
  gobble() {
    console.log('gobble gobble');
  }

  fly() {
    console.log(`i'm flying a short distance`);
  }
}

class TurkeyAdapter implements Duckk {
  constructor(private turkey: Turkey) {}

  quack() {
    this.turkey.gobble();
  }

  fly() {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}

const alabioDuck = new AlabioDuck();
const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

console.log('turkey says...');
turkey.gobble();
turkey.fly();

console.log('duck says...');
testDuck(alabioDuck);

console.log('turkey adapter says...');
testDuck(turkeyAdapter);

function testDuck(duck: Duckk) {
  duck.quack();
  duck.fly();
}
