import { describe, it, expect, beforeEach } from 'vitest';
import { MusicLibrary } from '../src/ejercicio-2/musiclibrary';
import { Song } from '../src/ejercicio-2/song';
import { Album } from '../src/ejercicio-2/album';
import { Single } from '../src/ejercicio-2/single';
import { Discography } from '../src/ejercicio-2/discography';


describe('Song', () => {
  it('should create a song with the correct properties', () => {
    const song = new Song('Imagine', 'John Lennon', 183);
    expect(song.title).toBe('Imagine');
    expect(song.artist).toBe('John Lennon');
    expect(song.duration).toBe(183);
  });
});

describe('Album', () => {
  it('should create an album with the correct properties', () => {
    const song1 = new Song('Track 1', 'Artist', 200);
    const album = new Album('Greatest Hits', 'Artist', 1999, [song1]);
    expect(album.title).toBe('Greatest Hits');
    expect(album.artist).toBe('Artist');
    expect(album.year).toBe(1999);
    expect(album.tracks).toHaveLength(1);
  });
});

describe('Single', () => {
  it('should create a single with the correct properties', () => {
    const single = new Single('Hit Single', 'Popular Band', 2020);
    expect(single.title).toBe('Hit Single');
    expect(single.artist).toBe('Popular Band');
    expect(single.year).toBe(2020);
  });
});

describe('Discography', () => {
  let discography: Discography;

  beforeEach(() => {
    discography = new Discography();
  });

  it('should add an album to the discography', () => {
    const album = new Album('Classic Album', 'Artist', 1980, []);
    discography.addAlbum(album);
    expect(discography.albums).toContain(album);
  });

  it('should add a single to the discography', () => {
    const single = new Single('Hit Song', 'Singer', 2010);
    discography.addSingle(single);
    expect(discography.singles).toContain(single);
  });
});

describe('MusicLibrary', () => {
  let library: MusicLibrary;

  beforeEach(() => {
    library = new MusicLibrary();
  });

  it('should add an artist to the library', () => {
    library.addArtist('New Artist');
    expect(library.discographies.has('New Artist')).toBe(true);
  });

  it('should add an album to an artist', () => {
    const album = new Album('Album Title', 'Famous Artist', 2022, []);
    library.addAlbumToArtist('Famous Artist', album);
    expect(library.discographies.get('Famous Artist')?.albums).toContain(album);
  });

  it('should add a single to an artist', () => {
    const single = new Single('Super Hit', 'Star Singer', 2021);
    library.addSingleToArtist('Star Singer', single);
    expect(library.discographies.get('Star Singer')?.singles).toContain(single);
  });
});
