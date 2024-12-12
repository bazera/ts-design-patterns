var AlabioDuck = /** @class */ (function () {
    function AlabioDuck() {
    }
    AlabioDuck.prototype.quack = function () {
        console.log('quack');
    };
    AlabioDuck.prototype.fly = function () {
        console.log("i'm flying");
    };
    return AlabioDuck;
}());
var WildTurkey = /** @class */ (function () {
    function WildTurkey() {
    }
    WildTurkey.prototype.gobble = function () {
        console.log('gobble gobble');
    };
    WildTurkey.prototype.fly = function () {
        console.log("i'm flying a short distance");
    };
    return WildTurkey;
}());
var TurkeyAdapter = /** @class */ (function () {
    function TurkeyAdapter(turkey) {
        this.turkey = turkey;
    }
    TurkeyAdapter.prototype.quack = function () {
        this.turkey.gobble();
    };
    TurkeyAdapter.prototype.fly = function () {
        for (var i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    };
    return TurkeyAdapter;
}());
var alabioDuck = new AlabioDuck();
var turkey = new WildTurkey();
var turkeyAdapter = new TurkeyAdapter(turkey);
console.log('turkey says...');
turkey.gobble();
turkey.fly();
console.log('duck says...');
testDuck(alabioDuck);
console.log('turkey adapter says...');
testDuck(turkeyAdapter);
function testDuck(duck) {
    duck.quack();
    duck.fly();
}
