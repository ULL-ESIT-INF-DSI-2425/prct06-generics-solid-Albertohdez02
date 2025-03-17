import { Observer } from "./observer.js";
import { Observable } from "./observable.js";
import { WeatherEvents } from "./meteo-station.js";
import { MeteoStation } from "./meteo-station.js";

/**
 * Class that creates a Panel that will get notify
 *
 * Class Panel
 */
export class Panel implements Observer {
  accessor _id: number;
  accessor _name: string;

  /**
   * Constructs a panel
   * @param id - id of the panel (number)
   * @param name - name of the panel (string)
   */
  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  /**
   * Update the notification of a panel
   * @param observable - observable object that notifies
   * @returns a string with the notification
   */
  update(observable: Observable): string {
    if (observable instanceof MeteoStation) {
      let result: string = `Panel [${this._name}] Notificación de la estación ${observable._name}: ${WeatherEvents[observable.EventType]}`;
      console.log(result);
      return result;
    }
    return "";
  }
}
