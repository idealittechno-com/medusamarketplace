import { type SubscriberConfig, type SubscriberArgs } from "@medusajs/medusa";
export default function handleOrderPlaced({ data, eventName, container, pluginOptions }: SubscriberArgs<Record<string, string>>): Promise<void>;
export declare const config: SubscriberConfig;
