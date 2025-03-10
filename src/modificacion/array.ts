/**
 * Class that creates an operates an array on a T generic type
 *
 * Class MyArray
 */
export class MyArray<T> {
  private _array: T[];

  /**
   * Construct a MyArray object
   * @param elements - a list of T type elements
   */
  constructor(...elements: T[]) {
    this._array = elements;
  }

  /**
   * Getter that returns the array
   * @returns the array
   */
  get array() {
    return this._array;
  }

  set array(list: T[]) {
    this._array = list;
  }

  /**
   * Method that pushes an element in the array
   * @param element - element to be push in the array
   */
  push(element: T) {
    this._array[this.length()] = element;
  }

  /**
   * Method that pops the last element of a list
   */
  pop(): T | undefined {
    if (this._array.length === 0) return undefined;

    const lastElement = this._array[this._array.length - 1];
    const newArray: T[] = [];

    for (let i = 0; i < this._array.length - 1; i++) {
      newArray[i] = this._array[i];
    }

    this._array = newArray;
    return lastElement;
  }

  /**
   * Method that returns the length of an array
   * @returns - the length of the array (number)
   */
  length() {
    return this._array.length;
  }

  /**
   * Appends another list's elements to the current list.
   * @param list - The list to append.
   */
  append(list: MyArray<T>): void {
    for (let i = 0; i < list.length(); i++) {
      this._array[this.length()] = list._array[i];
    }
  }

  /**
   * Concatenates multiple lists into a new list.
   * @param lists - The lists to concatenate.
   * @returns A new GenericList containing elements from all input lists.
   */
  static concatenate<T>(...lists: MyArray<T>[]): MyArray<T> {
    const result = new MyArray<T>();
    for (const list of lists) {
      result.append(list);
    }
    return result;
  }

  /**
   * Filters elements based on a predicate function.
   * @param predicate - The function to test each element.
   * @returns A new GenericList with elements that satisfy the predicate.
   */
  filter(predicate: (element: T) => boolean): MyArray<T> {
    let result = new MyArray<T>();
    for (let i = 0; i < this.array.length; i++) {
      if (predicate(this.array[i])) {
        result.push(this.array[i]);
      }
    }
    return result;
  }

  /**
   * Adds an element to the list.
   * @param item - The element to add.
   */
  add(item: T): void {
    this._array[this.length()] = item;
  }

  /**
   * Method that reverses an array
   * @returns - a reversed list
   */
  reverse(): MyArray<T> {
    let result = new MyArray<T>();
    for (let i = this.length() - 1; i >= 0; --i) {
      // Corrección en el índice inicial
      result.push(this._array[i]); // Añadir correctamente el elemento a result
    }
    return result;
  }

  /**
   * Method that maps an array with a function
   * @param callback - function to apply to the array
   * @returns an array
   */
  map<U>(callback: (element: T) => U): MyArray<U> {
    const mappedArray: U[] = [];
    for (let i = 0; i < this._array.length; i++) {
      mappedArray[i] = callback(this._array[i]);
    }
    return new MyArray<U>(...mappedArray);
  }

  /**
   * Method that reduces an array according to a function
   * @returns an element with the result of the operation on the array
   */
  reduce<U>(
    callback: (accumulator: U, currentValue: T) => U,
    initialValue: U,
  ): U {
    let accumulator = initialValue;
    for (let i = 0; i < this._array.length; i++) {
      accumulator = callback(accumulator, this._array[i]);
    }
    return accumulator;
  }

  /**
   * Method that executes a function for each element of the array
   * @param callback - function to apply to each element
   */
  forEach(callback: (element: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < this._array.length; i++) {
      callback(this._array[i], i, this._array);
    }
  }
}
