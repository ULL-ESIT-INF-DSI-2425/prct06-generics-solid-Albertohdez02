import { describe, expect, test } from "vitest";
import { Printer } from '../src/ejercicio-4/printer';
import { Scanner } from '../src/ejercicio-4/scanner';
import { PrinterScanner } from '../src/ejercicio-4/printerscanner';

describe('Printer, Scanner, and PrinterScanner tests', () => {
  test('Printer should print but not scan', () => {
    const printer = new Printer();
    expect(printer.print()).toBe('Printing...');
  });

  test('Scanner should scan but not print', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).toBe('Scanning...');
  });

  test('PrinterScanner should print and scan', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.print()).toBe('Printing...');
    expect(printerScanner.scan()).toBe('Scanning...');
  });
});
