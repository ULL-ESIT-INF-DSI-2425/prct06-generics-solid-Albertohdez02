/**
 * This code violates booth the Open Close Principle and Depency Inversion Principle. The first one since if a new notification
 * method is to be implemented, the class Notifier would be modified too. Lastly, the second one since Notifier depends directly
 * from EmailService and ShortMessageService, instead of an abstract class.
 * ```typescript
 *   // Class that allows notifications by email to be sent
 * class EmailService {
 *   notify(message: string): void {
 *     console.log(`Sending notification by email: ${message}`);
 *   }
 * }
 *
 * // Class that allows notifications by SMS to be sent
 * class ShortMessageService {
 *   notify(message: string): void {
 *     console.log(`Sending notification by SMS: ${message}`);
 *   }
 * }
 *
 * // Class that makes use of different types of services to perform notifications
 * class Notifier {
 *   constructor(private notificationService: EmailService | ShortMessageService) {
 *   }
 *
 *   sendNotification(message: string): void {
 *     this.notificationService.notify(message);
 *   }
 * }
 *
 * // Client code
 * const emailNotifier = new Notifier(new EmailService());
 * emailNotifier.sendNotification('Hello World!');
 *
 * const shortMessageNotifier = new Notifier(new ShortMessageService());
 * shortMessageNotifier.sendNotification('Hello World!');
 * ```
 */

/**
 * Interface that declares the method that any notification service should have
 * 
 * Interface NotificationService
 */
export interface NotificationService {
  notify(message: string): string;
}