import { SearchTypes } from "@medusajs/types";
export declare abstract class AbstractSearchService implements SearchTypes.ISearchService {
    abstract readonly isDefault: any;
    protected readonly options_: Record<string, unknown>;
    get options(): Record<string, unknown>;
    protected constructor(container: any, options: any);
    abstract createIndex(indexName: string, options: unknown): unknown;
    abstract getIndex(indexName: string): unknown;
    abstract addDocuments(indexName: string, documents: unknown, type: string): unknown;
    abstract replaceDocuments(indexName: string, documents: unknown, type: string): unknown;
    abstract deleteDocument(indexName: string, document_id: string | number): unknown;
    abstract deleteAllDocuments(indexName: string): unknown;
    abstract search(indexName: string, query: string | null, options: unknown): unknown;
    abstract updateSettings(indexName: string, settings: unknown): unknown;
}
