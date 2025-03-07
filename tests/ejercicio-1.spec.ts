import { describe, expect, test, beforeEach } from "vitest";
import { MovieCollection } from "../src/ejercicio-1/movie";
import { ShowCollection } from "../src/ejercicio-1/show";
import { DocumentaryCollection } from "../src/ejercicio-1/documentary";
import { MediaItem } from "../src/ejercicio-1/mediaitem";

describe("DSIflix Streaming Collections", () => {
  let movieCollection: MovieCollection;
  let showCollection: ShowCollection;
  let documentaryCollection: DocumentaryCollection;

  let movie1: MediaItem, movie2: MediaItem;
  let show1: MediaItem, show2: MediaItem;
  let doc1: MediaItem, doc2: MediaItem;

  beforeEach(() => {
    // Movies
    movie1 = { title: "Inception", releaseYear: 2010, duration: 148, genre: "Sci-Fi" };
    movie2 = { title: "Interstellar", releaseYear: 2014, duration: 169, genre: "Sci-Fi" };

    // Shows
    show1 = { title: "Breaking Bad", releaseYear: 2008, duration: 47, genre: "Drama" };
    show2 = { title: "Stranger Things", releaseYear: 2016, duration: 50, genre: "Horror" };

    // Documentaries
    doc1 = { title: "Planet Earth", releaseYear: 2006, duration: 60, genre: "Nature" };
    doc2 = { title: "The Social Dilemma", releaseYear: 2020, duration: 94, genre: "Technology" };

    movieCollection = new MovieCollection("Movies", "Various", 2000, 0, [movie1, movie2]);
    showCollection = new ShowCollection("Shows", "Various", 2000, 0, [show1, show2]);
    documentaryCollection = new DocumentaryCollection("Documentaries", "Various", 2000, 0, [doc1, doc2]);
  });

  
  test("MovieCollection should be initialized correctly", () => {
    expect(movieCollection.items).toHaveLength(2);
  });

  test("ShowCollection should be initialized correctly", () => {
    expect(showCollection.items).toHaveLength(2);
  });

  test("DocumentaryCollection should be initialized correctly", () => {
    expect(documentaryCollection.items).toHaveLength(2);
  });

  // Title search
  test("searchByTitle should return correct results for movies", () => {
    const result = movieCollection.searchByTitle("Inception");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Inception");
  });

  test("searchByTitle should return empty array for non-existent titles", () => {
    expect(movieCollection.searchByTitle("Unknown")).toHaveLength(0);
  });

  // Release year search
  test("searchByYear should return correct results for shows", () => {
    const result = showCollection.searchByYear(2016);
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Stranger Things");
  });

  test("searchByYear should return empty array for non-existent years", () => {
    expect(showCollection.searchByYear(1999)).toHaveLength(0);
  });

  // Genre search
  test("searchByGenre should return correct results for documentaries", () => {
    const result = documentaryCollection.searchByGenre("Technology");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("The Social Dilemma");
  });

  test("searchByGenre should be case insensitive", () => {
    const result = documentaryCollection.searchByGenre("nature");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Planet Earth");
  });

  test("searchByGenre should return empty array for non-existent genres", () => {
    expect(documentaryCollection.searchByGenre("Fantasy")).toHaveLength(0);
  });
});
