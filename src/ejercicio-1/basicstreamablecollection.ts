import { Streamable } from "./streamable";
import { Searchable } from "./searcheable";

/**
 * Abstract class representing a basic streamable collection.
 *
 * Class BasicStreamableCollection
 */
export abstract class BasicStreamableCollection<T>
  implements Streamable<T>, Searchable<T>
{
  /**
   * Construct a BasicStreamableCollection generic object
   * @param name - name of the collection (string)
   * @param genre - name of the genre of the collection (string)
   * @param releaseYear - year of the release of the collection (number)
   * @param duration - total runtime duration of the collection (number)
   * @param items - array with the elements of the collection (T[])
   */
  constructor(
    public readonly name: string,
    public readonly genre: string,
    public readonly releaseYear: number,
    public readonly duration: number,
    public readonly items: T[],
  ) {}

  /**
   * Method that searches elements in a collection by Title
   * @param title - title of the collection (string)
   */
  abstract searchByTitle(title: string): T[];

  /**
   * Method that searches elements in a collection by Release Year
   * @param year - year of the release of the collection (number)
   */
  abstract searchByYear(year: number): T[];

  /**
   * Method that searches elements in a collection by Genre
   * @param genre - genre of the collection (string)
   */
  abstract searchByGenre(genre: string): T[];
}
