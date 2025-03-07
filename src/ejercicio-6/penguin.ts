import { Bird } from "./bird";

/**
 * Birds that cannot fly should not implement Flyable.
 * 
 * Class Penguin
 */
export class Penguin extends Bird {
  /**
   * Method that prints a Penguin swimming
   * @returns a string with the name of the penguin swimming
   */
  swim(): string {
    let result: string = `${this.name} is swimming instead of flying.`
    console.log(result);
    return result;
  }
}