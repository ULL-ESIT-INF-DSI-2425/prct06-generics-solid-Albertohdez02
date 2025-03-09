import { FileOptions } from "./fileoptions";

/**
 * Class that implements a FileManager without depending directly from fs
 *
 * Class FileManager
 */
export class FileManager {
  /**
   * Construct a FileManager object
   * @param fileHandler - a FileOptions object
   */
  constructor(private fileHandler: FileOptions) {}

  /**
   * Method that returns a string with the content of a file
   * @returns - a string with the text read from a file
   */
  public readFile(): string {
    return this.fileHandler.read();
  }

  /**
   * Method that writes text in a file
   * @param data - a string with the text to be written in a file
   */
  public writeFile(data: string): void {
    this.fileHandler.write(data);
  }
}
