import { TransactionBaseService } from "./transaction-base-service";
type ReturnedData = {
    to: string;
    status: string;
    data: Record<string, unknown>;
};
export interface INotificationService extends TransactionBaseService {
    sendNotification(event: string, data: unknown, attachmentGenerator: unknown): Promise<ReturnedData>;
    resendNotification(notification: unknown, config: unknown, attachmentGenerator: unknown): Promise<ReturnedData>;
}
export declare abstract class AbstractNotificationService extends TransactionBaseService implements INotificationService {
    static identifier: string;
    getIdentifier(): string;
    abstract sendNotification(event: string, data: unknown, attachmentGenerator: unknown): Promise<ReturnedData>;
    abstract resendNotification(notification: unknown, config: unknown, attachmentGenerator: unknown): Promise<ReturnedData>;
}
export declare const isNotificationService: (obj: unknown) => boolean;
export {};
