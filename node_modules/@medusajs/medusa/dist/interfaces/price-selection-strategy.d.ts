import { MoneyAmount } from "../models";
import { PriceListType } from "../types/price-list";
import { TaxServiceRate } from "../types/tax-service";
import { ITransactionBaseService } from "@medusajs/types";
import { TransactionBaseService } from "./transaction-base-service";
export interface IPriceSelectionStrategy extends ITransactionBaseService {
    /**
     * Calculate the original and discount price for a given variant in a set of
     * circumstances described in the context.
     * @param variantId The variant id of the variant for which to retrieve prices
     * @param context Details relevant to determine the correct pricing of the variant
     * @return pricing details in an object containing the calculated lowest price,
     * the default price an all valid prices for the given variant
     */
    calculateVariantPrice(data: {
        variantId: string;
        quantity?: number;
    }[], context: PriceSelectionContext): Promise<Map<string, PriceSelectionResult>>;
    /**
     * Notify price selection strategy that variants prices have been updated.
     * @param variantIds The ids of the updated variants
     */
    onVariantsPricesUpdate(variantIds: string[]): Promise<void>;
}
export declare abstract class AbstractPriceSelectionStrategy extends TransactionBaseService implements IPriceSelectionStrategy {
    abstract calculateVariantPrice(data: {
        variantId: string;
        taxRates: TaxServiceRate[];
        quantity?: number;
    }[], context: PriceSelectionContext): Promise<Map<string, PriceSelectionResult>>;
    onVariantsPricesUpdate(variantIds: string[]): Promise<void>;
}
export declare function isPriceSelectionStrategy(object: any): object is IPriceSelectionStrategy;
export type PriceSelectionContext = {
    cart_id?: string;
    customer_id?: string;
    region_id?: string;
    quantity?: number;
    currency_code?: string;
    include_discount_prices?: boolean;
    tax_rates?: TaxServiceRate[];
    ignore_cache?: boolean;
};
declare enum DefaultPriceType {
    DEFAULT = "default"
}
export type PriceType = DefaultPriceType | PriceListType;
export declare const PriceType: {
    SALE: PriceListType.SALE;
    OVERRIDE: PriceListType.OVERRIDE;
    DEFAULT: DefaultPriceType.DEFAULT;
};
export type PriceSelectionResult = {
    originalPrice: number | null;
    originalPriceIncludesTax?: boolean | null;
    calculatedPrice: number | null;
    calculatedPriceIncludesTax?: boolean | null;
    calculatedPriceType?: PriceType;
    prices: MoneyAmount[];
};
export {};
