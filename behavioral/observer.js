"use strict";
// Observer Pattern (Behavioral)
class WeatherData {
    constructor() {
        this.observers = [];
    }
    registerObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }
    notifyObservers() {
        this.observers.forEach((observer) => observer.update(this.temperature, this.humidity, this.pressure));
    }
    measurementsChanged() {
        this.notifyObservers();
    }
    setMeasurements(temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}
class CurrentConditionsDisplay {
    constructor(weatherData) {
        var _a;
        this.weatherData = weatherData;
        (_a = this.weatherData) === null || _a === void 0 ? void 0 : _a.registerObserver(this);
    }
    update(temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }
    display() {
        console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
    }
}
class StatisticsDisplay {
    constructor(weatherData) {
        var _a;
        this.weatherData = weatherData;
        (_a = this.weatherData) === null || _a === void 0 ? void 0 : _a.registerObserver(this);
    }
    update(temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }
    display() {
        console.log(`Statistics: ${this.temperature}F degrees and ${this.humidity}% humidity`);
    }
}
class ForecastDisplay {
    constructor(weatherData) {
        var _a;
        this.weatherData = weatherData;
        (_a = this.weatherData) === null || _a === void 0 ? void 0 : _a.registerObserver(this);
    }
    update(temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }
    display() {
        console.log(`Forecast: ${this.temperature}F degrees and ${this.humidity}% humidity`);
    }
}
class ThirdPartyDisplay {
    update() { }
    display() { }
}
const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);
weatherData.setMeasurements(1, 2, 3);
weatherData.setMeasurements(4, 5, 6);
