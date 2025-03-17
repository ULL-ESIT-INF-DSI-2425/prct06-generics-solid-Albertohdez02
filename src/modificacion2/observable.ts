import { Observer } from "./observer.js";

/**
 * Interface that defines an observable
 *
 * Interface Observable
 */
export interface Observable {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}
