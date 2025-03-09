import { NotificationService } from "./notificationservice";

/**
 * Class that represents a notification system for any 
 */
export class Notifier<T extends NotificationService> {
  /**
   * Construct a Notifier object
   * @param notificationService - a notification system to trasmit the message
   */
  constructor(private notificationService: T) {}

  /**
   * Method that returns a message via a notification system
   * @param message - message that will be notified (string)
   * @returns a string with the message and its notification system
   */
  sendNotification(message: string): string {
    return this.notificationService.notify(message);
  }
}