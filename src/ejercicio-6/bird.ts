/**
 * Example of wrong code that does NOT follow some **SOLID Principles**
 *
 * A class `Bird` that its the parent of two classes, `Sparrow` and `Penguin`, that mistakenly states that `Penguins` can fly.
 *
 * ```typescript
 *  class Bird {
 *     fly(): void {
 *       console.log("Flying...");
 *     }
 *   }
 *  class Sparrow extends Bird {}
 *  class Penguin extends Bird {}
 * ```
 *
 * This code violates Liskov's Sustitution Principle since the creation of a Penguin object results in the same result of creating
 * a bird, implementing the fly method when obviously Penguins can not fly.
 *
 * To fix this, an interface for flyable birds can be created, as such:
 */

/**
 * General class for birds.
 *
 * Class Bird
 */
export abstract class Bird {
  /**
   * Constructs a Bird object
   * @param name - Name of the bird (string)
   */
  constructor(public name: string) {}

  /**
   * Method that prints the animal making a noise
   */
  makeSound(): void {
    console.log(`${this.name} is making a sound.`);
  }
}
