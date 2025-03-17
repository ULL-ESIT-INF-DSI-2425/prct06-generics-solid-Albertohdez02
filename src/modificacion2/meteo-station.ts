import { Observer } from "./observer.js";
import { Observable } from "./observable.js";

/**
 * Enums that represents the events of the weather
 * 
 * enum WeatherEvents
 */
export enum WeatherEvents {
  STORM,
  HEATWAVE,
  FLOOD,
  BLIZZARD,
  MILD
}

/**
 * Creates an observable meteo station
 * 
 * Class MeteoStation
 */
export class MeteoStation implements Observable {
  accessor _observers: Observer[] = [];
  private _event: WeatherEvents = WeatherEvents.MILD;
  accessor _id: number;
  accessor _name: string;

  /**
   * Constructs a Meteo station object
   * @param id - id of station (number)
   * @param name - name of station (string)
   */
  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  /**
   * Getter of the event type
   */
  get EventType() {
    return this._event;
  }

  /**
   * Adds an observer to the list
   * @param observer - observer to be added
   */
  addObserver(observer: Observer): void {
    this._observers.push(observer);
  }

  /**
   * Removes an observer from the list
   * @param observer - observer to be remove
   */
  removeObserver(observer: Observer): void {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }

  /**
   * Notify the observers of the changes
   */
  notifyObservers(): void {
    this._observers.forEach((observer) => observer.update(this));
  }

  /**
   * Notifies observers of a Storm
   */
  onStorm() {
    this._event = WeatherEvents.STORM;
    this.notifyObservers();
  };

  /**
   * Notifies observers of a Heatwave
   */
  onHeatWave() {
    this._event = WeatherEvents.HEATWAVE;
    this.notifyObservers();
  } 

  /**
   * Notifies observers of a Flood
   */
  onFlood() {
    this._event = WeatherEvents.FLOOD;
    this.notifyObservers();
  } 

  /**
   * Notifies observers of a Storm
   */
    /**
   * Notifies observers of a Flood
   */
  onBlizzard() {
    this._event = WeatherEvents.BLIZZARD;
    this.notifyObservers();
  }
}
