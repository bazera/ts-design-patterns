"use strict";
// Singleton Pattern (Creational)
/*

  Ensures a class has only one instance, and provides a global point of access to it.

*/
class Singleton {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
