import { describe, expect, test } from "vitest";
import { Flyable } from "../src/ejercicio-6/flyable";
import { Bird } from "../src/ejercicio-6/bird";
import { Sparrow } from "../src/ejercicio-6/sparrow";
import { Penguin } from "../src/ejercicio-6/penguin";


 
describe("Bird Class Tests", () => {
  test("Sparrow should be able to fly", () => {
    const sparrow = new Sparrow("Sparrow");
    expect(sparrow.fly).toBeDefined();
    expect(sparrow.fly()).toBe("Sparrow is flying...");
  });

  test("Penguin should not have a fly method", () => {
    const penguin = new Penguin("Penguin");
    expect(penguin.fly).toBeUndefined();
  });

  test("Penguin should be able to swim", () => {
    const penguin = new Penguin("Penguin");
    expect(penguin.swim).toBeDefined();
    expect(penguin.swim()).toBe("Penguin is swimming instead of flying.");
  });

  test("Sparrow should make sound", () => {
    const sparrow = new Sparrow("Sparrow");
    expect(() => sparrow.makeSound()).not.toThrow();
  });

  test("Penguin should make sound", () => {
    const penguin = new Penguin("Penguin");
    expect(() => penguin.makeSound()).not.toThrow();
  });

});