import { Song } from "./song";

/**
 * Represents a music album.
 */
export class Album {
  title: string;
  artist: string;
  year: number;
  tracks: Song[];

  /**
   * Creates an album instance.
   * @param title - The title of the album.
   * @param artist - The artist of the album.
   * @param year - The release year of the album.
   * @param tracks - The list of tracks in the album.
   */
  constructor(title: string, artist: string, year: number, tracks: Song[]) {
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.tracks = tracks;
  }
}
