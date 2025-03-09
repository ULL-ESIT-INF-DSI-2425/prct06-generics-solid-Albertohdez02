import { NotificationService } from "./notificationservice";

/**
 * Class that represents the email service 
 * 
 * Class EmailService
 */
export class EmailService implements NotificationService {
  /**
   * Method that returns a message transmitted via Email
   * @param message - message to be transmitted (string)
   * @returns a string with the message and the prompt transmitted via Email
   */
  notify(message: string): string {
    let result: string = `Sending notification by Email: ${message}`
    console.log(result);
    return result;
  }
}