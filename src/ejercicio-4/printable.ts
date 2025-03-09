/**
  * This code violates the Interface Segregation Principle, since there's only **ONE** interface that is implemented for
  * all of the classes, even if a class doesn't use both of the methods declared inside the interface. A solution could be
  * separating the PrintableScannable interface into two interfaces: `Printable` and `Scannable` each one with their correspondent
  * method.
  * 
  * ```typescript
  *  interface PrintableScannable {
  *    print(): void
  *    scan(): void
  *  }
  *
  *  class Printer implements PrintableScannable {
  *    print(): void {
  *      console.log('Printing...')
  *    }
  *
  *    scan(): void { }
  *  }
  *
  *  class Scanner implements PrintableScannable {
  *    print(): void { }
  *    scan(): void {
  *      console.log('Scanning...')
  *    }
  *  }
  *
  *  class PrinterScanner implements PrintableScannable {
  *    print(): void {
  *      console.log('Printing...')
  *    }
  *
  *    scan(): void {
  *      console.log('Scanning...')
  *    }
  *  }
  *
  *  // Client code
  *  const printer = new Printer();
  *  // Printing
  *  printer.print();
  *  const scanner = new Scanner();
  *  // Scanning
  *  scanner.scan();
  *  const printerScanner = new PrinterScanner();
  *  // Printing
  *  printerScanner.print();
  *  // Scanning
  *  printerScanner.scan();
  * ```
 */
/**
 * Interface that declares a scanning method for Scannable devices
 * 
 * Interface Scannable
 */
export interface Printable {
  print(): string
}