export default BasePaymentService;
/**
 * The interface that all payment services must inherit from. The intercace
 * provides the necessary methods for creating, authorizing and managing
 * payments.
 * @interface
 */
declare class BasePaymentService extends BaseService {
    getIdentifier(): any;
    /**
     * Used to create a payment to be processed with the service's payment gateway.
     * @param cart {object} - the cart that the payment should cover.
     * @return {Promise<{object}>} - returns a promise that resolves to an object
     * containing the payment data. This data will be saved to the cart for later
     * use.
     */
    createPayment(cart: object): Promise<{
        object;
    }>;
    /**
     * Used to retrieve a payment.
     * @param cart {object} - the cart whose payment should be retrieved.
     * @return {Promise<{object}>} - returns a promise that resolves to the
     * payment object as stored with the provider.
     */
    retrievePayment(cart: object): Promise<{
        object;
    }>;
    /**
     * Used to update a payment. This method is called when the cart is updated.
     * @param cart {object} - the cart whose payment should be updated.
     * @return {Promise<{object}>} - returns a promise that resolves to the
     * payment object as stored with the provider.
     */
    updatePayment(cart: object): Promise<{
        object;
    }>;
    getStatus(): void;
    authorizePayment(): void;
    capturePayment(): void;
    refundPayment(): void;
    deletePayment(): void;
    /**
     * If the payment provider can save a payment method this function will
     * retrieve them.
     */
    retrieveSavedMethods(customer: any): Promise<never[]>;
}
import BaseService from "./base-service";
