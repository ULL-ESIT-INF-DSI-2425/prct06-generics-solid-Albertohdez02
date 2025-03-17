import { describe, expect, beforeEach, test} from "vitest";
// import { Observable } from "../src/modificacion2/observable.js";
// import { Observer } from "../src/modificacion2/observer.js";
import { MeteoStation, WeatherEvents } from "../src/modificacion2/meteo-station.js";
import { MobileDevice } from "../src/modificacion2/mobile.js";
import { Panel } from "../src/modificacion2/panel.js";

describe("", () => {
  const meteo1 = new MeteoStation(1, "Izaña");
  const mobile1 = new MobileDevice(1, "iphone 14");
  const mobile2 = new MobileDevice(2, "Samsung S25");
  const panel1 = new Panel(1, "Estacion Norte");
  const panel2 = new Panel(1, "Estacion Sur");

  test("MeteoStation addObserver and removeObserver tests", () => {
    meteo1.addObserver(mobile1);
    expect(meteo1._observers.length).toBe(1);
    meteo1.addObserver(mobile2);
    expect(meteo1._observers.length).toBe(2);
    meteo1.removeObserver(mobile2);
    expect(meteo1._observers.length).toBe(1);

  });

  test("MeteoStation Events tests", () => {
    console.log("There weather is quite nice!");
    expect(mobile1.update(meteo1)).toBe("[iphone 14] Notificación de la estación Izaña: MILD");

    console.log("There's a Huge Storm coming!");
    meteo1.onStorm();
    expect(mobile1.update(meteo1)).toBe("[iphone 14] Notificación de la estación Izaña: STORM");

    console.log("There's a Heatwave coming!");
    meteo1.onHeatWave();
    expect(mobile1.update(meteo1)).toBe("[iphone 14] Notificación de la estación Izaña: HEATWAVE");

    console.log("There's a horrendous Flood coming!");
    meteo1.onFlood();
    expect(mobile1.update(meteo1)).toBe("[iphone 14] Notificación de la estación Izaña: FLOOD");

    console.log("There's a cold Blizzard coming!");
    meteo1.onBlizzard();
    expect(mobile1.update(meteo1)).toBe("[iphone 14] Notificación de la estación Izaña: BLIZZARD");
  });

  test("MeteoStation adds another type of observer", () => {
    meteo1.addObserver(panel1);

    console.log("There's a Huge Storm coming!");
    meteo1.onStorm();
    expect(panel1.update(meteo1)).toBe("Panel [Estacion Norte] Notificación de la estación Izaña: STORM");

    meteo1.addObserver(panel2);
    console.log("There's a Flood coming!");
    meteo1.onFlood();
    expect(panel2.update(meteo1)).toBe("Panel [Estacion Sur] Notificación de la estación Izaña: FLOOD");
  });
});
