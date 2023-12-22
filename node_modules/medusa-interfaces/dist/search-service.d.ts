export default SearchService;
/**
 * The interface that all search services must implement.
 * @interface
 */
declare class SearchService extends BaseService {
    get options(): any;
    /**
     * Used to create an index
     * @param indexName {string} - the index name
     * @param [options] {string} - the index name
     * @return {Promise<{object}>} - returns response from search engine provider
     */
    createIndex(indexName: string, options?: string | undefined): Promise<{
        object;
    }>;
    /**
     * Used to get an index
     * @param indexName {string} - the index name.
     * @return {Promise<{object}>} - returns response from search engine provider
     */
    getIndex(indexName: string): Promise<{
        object;
    }>;
    /**
     * Used to index documents by the search engine provider
     * @param indexName {string} - the index name
     * @param documents {Array.<Object>} - documents array to be indexed
     * @param type {string} - type of documents to be added (e.g: products, regions, orders, etc)
     * @return {Promise<{object}>} - returns response from search engine provider
     */
    addDocuments(indexName: string, documents: Array<any>, type: string): Promise<{
        object;
    }>;
    /**
     * Used to replace documents
     * @param indexName {string} - the index name.
     * @param documents {Object} - array of document objects that will replace existing documents
     * @param type {Array.<Object>} - type of documents to be replaced (e.g: products, regions, orders, etc)
     * @return {Promise<{object}>} - returns response from search engine provider
     */
    replaceDocuments(indexName: string, documents: any, type: Array<any>): Promise<{
        object;
    }>;
    /**
     * Used to delete document
     * @param indexName {string} - the index name
     * @param document_id {string} - the id of the document
     * @return {Promise<{object}>} - returns response from search engine provider
     */
    deleteDocument(indexName: string, document_id: string): Promise<{
        object;
    }>;
    /**
     * Used to delete all documents
     * @param indexName {string} - the index name
     * @return {Promise<{object}>} - returns response from search engine provider
     */
    deleteAllDocuments(indexName: string): Promise<{
        object;
    }>;
    /**
     * Used to search for a document in an index
     * @param indexName {string} - the index name
     * @param query {string} - the search query
     * @param options {{ paginationOptions: { limit: number, offset: number }, filter: any, additionalOptions: any}}
     * - any options passed to the request object other than the query and indexName
     * - additionalOptions contain any provider specific options
     * @return {Promise<{ hits: any[]; [k: string]: any; }>} returns response from search engine provider
     */
    search(indexName: string, query: string, options: {
        paginationOptions: {
            limit: number;
            offset: number;
        };
        filter: any;
        additionalOptions: any;
    }): Promise<{
        [k: string]: any;
        hits: any[];
    }>;
    /**
     * Used to update the settings of an index
     * @param indexName {string} - the index name
     * @param settings {object} - settings object
     * @return {Promise<{object}>} - returns response from search engine provider
     */
    updateSettings(indexName: string, settings: object): Promise<{
        object;
    }>;
}
import BaseService from "./base-service";
