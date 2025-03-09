/**
 * Represents a music single.
 */
export class Single {
  title: string;
  artist: string;
  year: number;

  /**
   * Creates a single instance.
   * @param title - The title of the single.
   * @param artist - The artist of the single.
   * @param year - The release year of the single.
   */
  constructor(title: string, artist: string, year: number) {
    this.title = title;
    this.artist = artist;
    this.year = year;
  }
}
