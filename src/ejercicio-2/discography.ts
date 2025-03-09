import { Single } from "./single";
import { Album } from "./album";

/**
 * Represents a discography containing albums and singles.
 */
export class Discography {
  albums: Album[];
  singles: Single[];

  /**
   * Creates an empty discography.
   */
  constructor() {
    this.albums = [];
    this.singles = [];
  }

  /**
   * Adds an album to the discography.
   * @param album - The album to add.
   */
  addAlbum(album: Album): void {
    this.albums.push(album);
  }

  /**
   * Adds a single to the discography.
   * @param single - The single to add.
   */
  addSingle(single: Single): void {
    this.singles.push(single);
  }

  /**
   * Displays the discography in a tabular format.
   */
  showDiscography(): void {
    console.log("Albums:");
    console.table(this.albums);
    console.log("Singles:");
    console.table(this.singles);
  }
}
