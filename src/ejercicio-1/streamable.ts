
/**
 * Interface for atributes of streamable objects 
 * 
 * Interface Streamable
 */
export interface Streamable<T> {
  name: string;
  genre: string;
  releaseYear: number;
  duration: number;
  items: T[];
}
