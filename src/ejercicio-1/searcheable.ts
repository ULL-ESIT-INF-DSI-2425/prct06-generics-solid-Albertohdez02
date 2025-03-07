/**
 * Interface for searching methods of streamable objects 
 * 
 * Interface Searcheable
 */
export interface Searchable<T> {
  searchByTitle(title: string): T[];
  searchByYear(year: number): T[];
  searchByGenre(genre: string): T[];
}