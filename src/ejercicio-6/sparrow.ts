import { Flyable } from "./flyable";
import { Bird } from "./bird";

/**
 * Birds that can fly should implement the Flyable interface.
 * 
 * Class Sparrow
 */
export class Sparrow extends Bird implements Flyable {
  /**
   * Method implementation of Flyable
   * @returns a string with the name of the Sparrow flying
   */
  fly(): string {
    let result: string = `${this.name} is flying...`;
    console.log(result);
    return result;
  }
}