import { BasicStreamableCollection } from "./basicstreamablecollection";
import { MediaItem } from "./mediaitem";

/**
 * Represents a collection of movies.
 * 
 * Class MovieCollection
 */
export class MovieCollection extends BasicStreamableCollection<MediaItem> {
  /**
   * Construct a MovieCollection object
   * @param name - name of the collection (string)
   * @param genre - name of the genre of the collection (string)
   * @param releaseYear - year of the release of the collection (number)
   * @param duration - total runtime duration of the collection (number)
   * @param movies - array with the movies of the collection (MediaItem[])
   */
  constructor(name: string, genre: string, releaseYear: number, duration: number, movies: MediaItem[]) {
    super(name, genre, releaseYear, duration, movies);
  }

  /**
   * Method that searches movies in a collection by Title
   * @param title - title of the collection (string)
   * @returns an array with the results of the search
   */
  searchByTitle(title: string): MediaItem[] {
    return this.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
  }

  /**
   * Method that searches movies in a collection by Release Year
   * @param year - year of the release of the collection (number)
   * @returns an array with the results of the search
   */
  searchByYear(year: number): MediaItem[] {
    return this.items.filter(item => item.releaseYear === year);
  }

  /**
   * Method that searches movies in a collection by Genre
   * @param genre - genre of the collection (string)
   * @returns an array with the results of the search
   */
  searchByGenre(genre: string): MediaItem[] {
    return this.items.filter(item => item.genre.toLowerCase() === genre.toLowerCase());
  }
}
