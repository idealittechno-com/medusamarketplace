export default BaseService;
/**
 * Common functionality for Services
 * @interface
 */
declare class BaseService {
    decorators_: any[];
    withTransaction(): BaseService;
    /**
     * Used to build TypeORM queries.
     */
    buildQuery_(selector: any, config?: {}): {
        where: {};
    };
    /**
     * Confirms whether a given raw id is valid. Fails if the provided
     * id is null or undefined. The validate function takes an optional config
     * param, to support checking id prefix and length.
     * @param {string} rawId - the id to validate.
     * @param {object?} config - optional config
     * @returns {string} the rawId given that nothing failed
     */
    validateId_(rawId: string, config?: object | null): string;
    shouldRetryTransaction(err: any): boolean;
    /**
     * Wraps some work within a transactional block. If the service already has
     * a transaction manager attached this will be reused, otherwise a new
     * transaction manager is created.
     * @param {function} work - the transactional work to be done
     * @param {string} isolation - the isolation level to be used for the work.
     * @return {any} the result of the transactional work
     */
    atomicPhase_(work: Function, isolationOrErrorHandler: any, maybeErrorHandlerOrDontFail: any): any;
    manager_: any;
    transactionManager_: any;
    /**
     * Dedicated method to set metadata.
     * @param {string} obj - the entity to apply metadata to.
     * @param {object} metadata - the metadata to set
     * @return {Promise} resolves to the updated result.
     */
    setMetadata_(obj: string, metadata: object): Promise<any>;
    /**
     * Adds a decorator to a service. The decorator must be a function and should
     * return a decorated object.
     * @param {function} fn - the decorator to add to the service
     */
    addDecorator(fn: Function): void;
    /**
     * Runs the decorators registered on the service. The decorators are run in
     * the order they have been registered in. Failing decorators will be skipped
     * in order to ensure deliverability in spite of breaking code.
     * @param {object} obj - the object to decorate.
     * @return {object} the decorated object.
     */
    runDecorators_(obj: object, fields?: any[], expandFields?: any[]): object;
}
