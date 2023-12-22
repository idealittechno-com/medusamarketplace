export default BaseNotificationService;
/**
 * Interface for Notification Providers
 * @interface
 */
declare class BaseNotificationService extends BaseService {
    getIdentifier(): any;
    /**
     * Used to retrieve documents related to a shipment.
     */
    sendNotification(event: any, data: any): void;
    resendNotification(notification: any, config?: {}): void;
}
import BaseService from "./base-service";
