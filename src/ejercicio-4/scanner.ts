import { Scannable } from "./scannable";

/**
 * Class that represents a Scanner that can only scan
 *
 * Class Scanner
 */
export class Scanner implements Scannable {
  /**
   * Method that prints a cue when a scanner is scanning
   * @returns a string with the status of Scanning
   */
  scan(): string {
    let result: string = 'Scanning...';
    console.log(result);
    return result;
  }
}