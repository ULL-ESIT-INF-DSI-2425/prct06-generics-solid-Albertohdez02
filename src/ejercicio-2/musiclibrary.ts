import { Discography } from "./discography";
import { Album } from "./album";
import { Single } from "./single";

/**
 * Represents a complete music library.
 */
export class MusicLibrary {
  public readonly discographies: Map<string, Discography>;

  /**
   * Creates a music library instance.
   */
  constructor() {
    this.discographies = new Map<string, Discography>();
  }

  /**
   * Adds an artist with an empty discography.
   * @param artist - The artist to add.
   */
  addArtist(artist: string): void {
    if (!this.discographies.has(artist)) {
      this.discographies.set(artist, new Discography());
    }
  }

  /**
   * Adds an album to an artist's discography.
   * @param artist - The artist's name.
   * @param album - The album to add.
   */
  addAlbumToArtist(artist: string, album: Album): void {
    this.addArtist(artist);
    this.discographies.get(artist)?.addAlbum(album);
  }

  /**
   * Adds a single to an artist's discography.
   * @param artist - The artist's name.
   * @param single - The single to add.
   */
  addSingleToArtist(artist: string, single: Single): void {
    this.addArtist(artist);
    this.discographies.get(artist)?.addSingle(single);
  }

  /**
   * Displays the full music library.
   */
  showLibrary(): void {
    this.discographies.forEach((discography, artist) => {
      console.log(`Artist: ${artist}`);
      discography.showDiscography();
    });
  }
}
