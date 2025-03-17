import { describe, expect, test, beforeEach } from "vitest";
import { MovieCollection } from "../src/ejercicio-1/movie.js";
import { ShowCollection } from "../src/ejercicio-1/show.js";
import { DocumentaryCollection } from "../src/ejercicio-1/documentary.js";
import { MediaItem } from "../src/ejercicio-1/mediaitem.js";

describe("DSIflix Streaming Collections", () => {
  let movieCollection: MovieCollection;
  let showCollection: ShowCollection;
  let documentaryCollection: DocumentaryCollection;

  let movie1: MediaItem, movie2: MediaItem, movie3: MediaItem;
  let show1: MediaItem, show2: MediaItem, show3: MediaItem;
  let doc1: MediaItem, doc2: MediaItem, doc3: MediaItem;

  beforeEach(() => {
    // Movies
    movie1 = { title: "Inception", releaseYear: 2010, duration: 148, genre: "Sci-Fi" };
    movie2 = { title: "Interstellar", releaseYear: 2014, duration: 169, genre: "Sci-Fi" };
    movie3 = { title: "The Matrix", releaseYear: 1999, duration: 136, genre: "Action" };

    // Shows
    show1 = { title: "Breaking Bad", releaseYear: 2008, duration: 47, genre: "Drama" };
    show2 = { title: "Stranger Things", releaseYear: 2016, duration: 50, genre: "Horror" };
    show3 = { title: "Game of Thrones", releaseYear: 2011, duration: 60, genre: "Fantasy" };

    // Documentaries
    doc1 = { title: "Planet Earth", releaseYear: 2006, duration: 60, genre: "Nature" };
    doc2 = { title: "The Social Dilemma", releaseYear: 2020, duration: 94, genre: "Technology" };
    doc3 = { title: "Inside Bill’s Brain", releaseYear: 2019, duration: 90, genre: "Biography" };

    movieCollection = new MovieCollection("Movies", "Various", 2000, 0, [movie1, movie2, movie3]);
    showCollection = new ShowCollection("Shows", "Various", 2000, 0, [show1, show2, show3]);
    documentaryCollection = new DocumentaryCollection("Documentaries", "Various", 2000, 0, [doc1, doc2, doc3]);
  });

  // Create each collection
  test("MovieCollection should be initialized correctly", () => {
    expect(movieCollection.items).toHaveLength(3);
  });

  test("ShowCollection should be initialized correctly", () => {
    expect(showCollection.items).toHaveLength(3);
  });

  test("DocumentaryCollection should be initialized correctly", () => {
    expect(documentaryCollection.items).toHaveLength(3);
  });

  // Title
  test("searchByTitle should return correct results for movies", () => {
    expect(movieCollection.searchByTitle("Inception")).toHaveLength(1);
  });

  test("searchByTitle should return correct results for shows", () => {
    expect(showCollection.searchByTitle("Breaking Bad")).toHaveLength(1);
  });

  test("searchByTitle should return correct results for documentaries", () => {
    expect(documentaryCollection.searchByTitle("Planet Earth")).toHaveLength(1);
  });

  test("searchByTitle should return empty array for non-existent titles", () => {
    expect(movieCollection.searchByTitle("Unknown Movie")).toHaveLength(0);
  });

  test("searchByTitle should be case insensitive", () => {
    expect(movieCollection.searchByTitle("interstellar")).toHaveLength(1);
  });

  test("searchByTitle should handle extra spaces", () => {
    expect(movieCollection.searchByTitle("The Matrix")).toHaveLength(1);
  });

  // Year
  test("searchByYear should return correct results for movies", () => {
    expect(movieCollection.searchByYear(1999)).toHaveLength(1);
  });

  test("searchByYear should return correct results for shows", () => {
    expect(showCollection.searchByYear(2011)).toHaveLength(1);
  });

  test("searchByYear should return correct results for documentaries", () => {
    expect(documentaryCollection.searchByYear(2020)).toHaveLength(1);
  });

  test("searchByYear should return empty array for non-existent years", () => {
    expect(showCollection.searchByYear(1800)).toHaveLength(0);
  });

  // Genre
  test("searchByGenre should return correct results for movies", () => {
    expect(movieCollection.searchByGenre("Sci-Fi")).toHaveLength(2);
  });

  test("searchByGenre should return correct results for shows", () => {
    expect(showCollection.searchByGenre("Fantasy")).toHaveLength(1);
  });

  test("searchByGenre should return correct results for documentaries", () => {
    expect(documentaryCollection.searchByGenre("Biography")).toHaveLength(1);
  });

  test("searchByGenre should return empty array for non-existent genres", () => {
    expect(documentaryCollection.searchByGenre("Comedy")).toHaveLength(0);
  });

  test("searchByGenre should be case insensitive", () => {
    expect(movieCollection.searchByGenre("sci-fi")).toHaveLength(2);
  });

  test("searchByGenre should handle extra spaces", () => {
    expect(movieCollection.searchByGenre("  Action  ")).toHaveLength(0);
  });

});
