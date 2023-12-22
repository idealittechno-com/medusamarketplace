import { DeleteResult } from "typeorm";
import { SalesChannel } from "../models";
import { ExtendedFindConfig } from "../types/common";
export declare const SalesChannelRepository: import("typeorm").Repository<SalesChannel> & {
    getFreeTextSearchResultsAndCount(q: string, options?: ExtendedFindConfig<SalesChannel>): Promise<[SalesChannel[], number]>;
    removeProducts(salesChannelId: string, productIds: string[]): Promise<DeleteResult>;
    addProducts(salesChannelId: string, productIds: string[]): Promise<void>;
    listProductIdsBySalesChannelIds(salesChannelIds: string | string[]): Promise<{
        [salesChannelId: string]: string[];
    }>;
};
export default SalesChannelRepository;
