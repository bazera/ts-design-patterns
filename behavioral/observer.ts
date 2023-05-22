// Observer Pattern (Behavioral)

/*

Defined a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

*/

interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(
    temp: number | undefined,
    humidity: number | undefined,
    pressure: number | undefined
  ): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Observer[] = [];

  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidity, this.pressure)
    );
  }

  private measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(
    temp: number | undefined,
    humidity: number | undefined,
    pressure: number | undefined
  ): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number | undefined;
  private humidity: number | undefined;

  constructor(private weatherData: WeatherData) {
    this.weatherData?.registerObserver(this);
  }

  update(
    temp: number | undefined,
    humidity: number | undefined,
    pressure: number | undefined
  ): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`
    );
  }
}

class StatisticsDisplay implements Observer, DisplayElement {
  private temperature: number | undefined;
  private humidity: number | undefined;

  constructor(private weatherData: WeatherData) {
    this.weatherData?.registerObserver(this);
  }

  update(
    temp: number | undefined,
    humidity: number | undefined,
    pressure: number | undefined
  ): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Statistics: ${this.temperature}F degrees and ${this.humidity}% humidity`
    );
  }
}

class ForecastDisplay implements Observer, DisplayElement {
  private temperature: number | undefined;
  private humidity: number | undefined;

  constructor(private weatherData: WeatherData) {
    this.weatherData?.registerObserver(this);
  }

  update(
    temp: number | undefined,
    humidity: number | undefined,
    pressure: number | undefined
  ): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Forecast: ${this.temperature}F degrees and ${this.humidity}% humidity`
    );
  }
}

class ThirdPartyDisplay implements Observer, DisplayElement {
  update(): void {}
  display(): void {}
}

const weatherData: WeatherData | undefined = new WeatherData();

const currentDisplay = new CurrentConditionsDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);

weatherData.setMeasurements(1, 2, 3);
weatherData.setMeasurements(4, 5, 6);
