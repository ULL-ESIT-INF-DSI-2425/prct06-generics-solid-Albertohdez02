import { describe, expect, beforeEach, test} from "vitest";
import { MyArray } from "../src/modificacion/array"


describe("", () => {

  let stringArray1 = new MyArray("hola", "pepe");
  let stringArray2 = new MyArray("hola", "paco", "como estas");
  let numberArray1 = new MyArray(0, 1, 2, 3, 4);
  let numberArray2 = new MyArray(5, 6, 7, 8, 9, 10);
  let booleanArray1 = new MyArray(true, false, false, true);
  let booleanArray2 = new MyArray(true, true,true);


  test("Are objects of MyArray class", () => {
    expect(stringArray1).toBeInstanceOf(MyArray);
    expect(stringArray2).toBeInstanceOf(MyArray);
    expect(numberArray1).toBeInstanceOf(MyArray);
    expect(numberArray2).toBeInstanceOf(MyArray);
    expect(booleanArray1).toBeInstanceOf(MyArray);
    expect(booleanArray2).toBeInstanceOf(MyArray);
  });

  test("Should return the correct length of the array", () => {
    expect(stringArray1.length()).toBe(2);
    expect(stringArray2.length()).toBe(3);
    expect(numberArray1.length()).toBe(5);
    expect(numberArray2.length()).toBe(6);
    expect(booleanArray1.length()).toBe(4);
    expect(booleanArray2.length()).toBe(3);
  });

  test("Should append two list correctly", () => {
    stringArray1.append(stringArray2);
    expect(stringArray1.array).toEqual(["hola", "pepe", "hola", "paco", "como estas"]);
    numberArray1.append(numberArray2);
    expect(numberArray1.array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    booleanArray1.append(booleanArray2)
    expect(booleanArray1.array).toEqual([true, false, false, true, true, true, true]);
  });

  test("Should concatenate multiple lists correctly", () => {
    const list1 = new MyArray("a", "b");
    const list2 = new MyArray("c", "d");
    const list3 = new MyArray("e", "f");

    const concatenatedList = MyArray.concatenate(list1, list2, list3);

    expect(concatenatedList.array).toEqual(["a", "b", "c", "d", "e", "f"]);
  });

  test("Should filter elements correctly", () => {
    const numberList = new MyArray(1, 2, 3, 4, 5, 6);

    const filteredList = numberList.filter((num) => num % 2 === 0);

    expect(filteredList.array).toEqual([2, 4, 6]);
  });

  test("Should reverse elements correctly", () => {
    const numberList = new MyArray(1, 2, 3, 4, 5, 6);

    const reversedlist = numberList.reverse();

    expect(reversedlist.array).toEqual([6, 5, 4, 3, 2, 1]);
  });

  test('Should map elements correctly', () => {
    const myArray = new MyArray(1, 2, 3, 4);

    const result = myArray.map((element) => element * 2);

    expect(result).toEqual(new MyArray(2, 4, 6, 8));
  });

  test('Should reduce an array correctly', () => {
    const myArray = new MyArray(1, 2, 3, 4);

    const sum = myArray.reduce((acc, value) => acc + value, 0);
    expect(sum).toBe(10);

    const product = myArray.reduce((acc, value) => acc * value, 1);
    expect(product).toBe(24);
  });

  test('Should execute forEach correctly on each element', () => {
    const myArray = new MyArray(1, 2, 3, 4);

    const results: string[] = [];
    let total: number = 0;


    myArray.forEach((element, index) => {
      results.push(`Element at index ${index}: ${element}`);
    });

    expect(results).toEqual([
      'Element at index 0: 1',
      'Element at index 1: 2',
      'Element at index 2: 3',
      'Element at index 3: 4',
    ]);

    numberArray1.forEach((element) => {
      total += element; 
    })

    expect(total).toBe(55);
  });
});
