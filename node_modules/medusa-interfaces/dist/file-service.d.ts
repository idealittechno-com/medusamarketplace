export default BaseFileService;
/**
 * Interface for file connectors
 * @interface
 */
declare class BaseFileService extends BaseService {
    upload(): void;
    delete(): void;
}
import BaseService from "./base-service";
