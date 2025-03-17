import { Observer } from "./observer.js";
import { Observable } from "./observable.js";
import { WeatherEvents } from "./meteo-station.js";
import { MeteoStation } from "./meteo-station.js";

/**
 * Class that creates a MobileDevice that will get notify
 *
 * Class MobileDevice
 */
export class MobileDevice implements Observer {
  accessor _id: number;
  accessor _name: string;

  /**
   * Constructs a mobile device
   * @param id - id of the phone (number)
   * @param name - name of the phone (string)
   */
  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  /**
   * Update the notification of a mobile decive
   * @param observable - observable object that notifies
   * @returns a string with the notification
   */
  update(observable: Observable): string {
    if (observable instanceof MeteoStation) {
      let result: string = `[${this._name}] Notificación de la estación ${observable._name}: ${WeatherEvents[observable.EventType]}`;
      console.log(result);
      return result;
    }
    return "";
  }
}
