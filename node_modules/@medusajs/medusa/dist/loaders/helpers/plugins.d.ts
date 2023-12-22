import { LifetimeType } from "awilix";
import { FulfillmentService } from "medusa-interfaces";
import { AbstractFulfillmentService, AbstractPaymentProcessor, AbstractPaymentService } from "../../interfaces";
import { ClassConstructor, MedusaContainer } from "../../types/global";
type Context = {
    container: MedusaContainer;
    pluginDetails: Record<string, unknown>;
    registrationName: string;
};
export declare function registerPaymentServiceFromClass(klass: ClassConstructor<AbstractPaymentService> & {
    LIFE_TIME?: LifetimeType;
}, context: Context): void;
export declare function registerPaymentProcessorFromClass(klass: ClassConstructor<AbstractPaymentProcessor> & {
    LIFE_TIME?: LifetimeType;
}, context: Context): void;
export declare function registerAbstractFulfillmentServiceFromClass(klass: ClassConstructor<AbstractFulfillmentService> & {
    LIFE_TIME?: LifetimeType;
}, context: Context): void;
export declare function registerFulfillmentServiceFromClass(klass: ClassConstructor<typeof FulfillmentService> & {
    LIFE_TIME?: LifetimeType;
}, context: Context): void;
export {};
