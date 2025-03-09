import { Printable } from "./printable";

/**
 * Class that represents a Printer that can only print
 *
 * Class Printer
 */
export class Printer implements Printable {
  /**
   * Method that prints a cue when a printer is printing
   * @returns a string with the status of Printing
   */
  print(): string {
    let result: string = "Printing...";
    console.log(result);
    return result;
  }
}
