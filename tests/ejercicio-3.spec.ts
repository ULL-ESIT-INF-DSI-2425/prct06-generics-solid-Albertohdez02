import { describe, it, expect, beforeEach, vi } from "vitest";
import { FileHandler } from "../src/ejercicio-3/filehandler";
import { FileManager } from "../src/ejercicio-3/filemanager";
import * as fs from "fs";

vi.mock("fs"); 

describe("FileManager", () => {
  const mockFilePath = "test.txt";
  let fileHandler: FileHandler;
  let fileManager: FileManager;

  beforeEach(() => {
    fileHandler = new FileHandler(mockFilePath);
    fileManager = new FileManager(fileHandler);
    vi.clearAllMocks(); 
  });

  it("debe leer correctamente un archivo", () => {
    vi.spyOn(fs, "readFileSync").mockReturnValue("Contenido de prueba");

    const content = fileManager.readFile();
    expect(content).toBe("Contenido de prueba");
    expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath, "utf-8");
  });

  it("debe escribir correctamente en un archivo", () => {
    fileManager.writeFile("Nuevo contenido");
    expect(fs.writeFileSync).toHaveBeenCalledWith(mockFilePath, "Nuevo contenido", "utf-8");
  });

  it("debe manejar errores al leer un archivo", () => {
    vi.spyOn(fs, "readFileSync").mockImplementation(() => {
      throw new Error("Error de lectura");
    });

    const content = fileManager.readFile();
    expect(content).toBe("");
    expect(fs.readFileSync).toHaveBeenCalled();
  });

  it("debe manejar errores al escribir en un archivo", () => {
    vi.spyOn(fs, "writeFileSync").mockImplementation(() => {
      throw new Error("Error de escritura");
    });

    expect(() => fileManager.writeFile("Contenido")).not.toThrow();
    expect(fs.writeFileSync).toHaveBeenCalled();
  });
});