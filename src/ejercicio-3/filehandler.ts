import { FileOptions } from "./fileoptions";

import * as fs from "fs";

/**
 * Class that handles operations with files
 *
 * Class FileHandler
 */
export class FileHandler implements FileOptions {
  /**
   * Construct a FileHandler object
   * @param filePath - a string with the path of a file
   */
  constructor(private filePath: string) {}

  /**
   * Method that returns a string with the content of a file
   * @returns - a string with the text read from a file
   */
  public read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      return "";
    }
  }

  /**
   * Method that writes text in a file
   * @param data - a string with the text to be written in a file
   */
  public write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo:", error);
    }
  }
}
