import { NotificationService } from "./notificationservice";

/**
 * Class that represents the short message service (SMS)
 *
 * Class ShortMessageService
 */
export class ShortMessageService implements NotificationService {
  /**
   * Method that returns a message transmitted via SMS
   * @param message - message to be transmitted (string)
   * @returns a string with the message and the prompt transmitted via SMS
   */
  notify(message: string): string {
    let result: string = `Sending notification by SMS: ${message}`;
    console.log(result);
    return result;
  }
}
