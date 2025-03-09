import { describe, expect, test } from "vitest";
import { Notifier } from "../src/ejercicio-5/notifier";
import { EmailService } from "../src/ejercicio-5/emailservice";
import { ShortMessageService } from "../src/ejercicio-5/sms";

describe("Notifier", () => {
  test("should send notification via EmailService", () => {
    const emailService = new EmailService();
    const notifier = new Notifier(emailService);

    expect(notifier.sendNotification("Test Email")).toBe("Sending notification by Email: Test Email");
  });

  test("should send notification via ShortMessageService", () => {
    const smsService = new ShortMessageService();
    const notifier = new Notifier(smsService);

    expect(notifier.sendNotification("Test SMS")).toBe("Sending notification by SMS: Test SMS");
  });
});
