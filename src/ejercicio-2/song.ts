/**
 * Represents a song.
 */
export class Song {
  title: string;
  artist: string;
  duration: number;

  /**
   * Creates a song instance.
   * @param title - The title of the song.
   * @param artist - The artist of the song.
   * @param duration - The duration of the song in seconds.
   */
  constructor(title: string, artist: string, duration: number) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }
}
