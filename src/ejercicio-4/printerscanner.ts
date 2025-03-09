import { Printable } from "./printable";
import { Scannable } from "./scannable";

/**
 * Class that represents a Printer-Scanner that can print and scan
 *
 * Class PrinterScanner
 */
export class PrinterScanner implements Printable, Scannable {
  /**
   * Method that prints a cue when a printer-scanner is printing
   * @returns a string with the status of Printing
   */
  print(): string {
    let result: string = "Printing...";
    console.log(result);
    return result;
  }

  /**
   * Method that prints a cue when a printer-scanner is scanning
   * @returns a string with the status of Scanning
   */
  scan(): string {
    let result: string = 'Scanning...';
    console.log(result);
    return result;
  }
}