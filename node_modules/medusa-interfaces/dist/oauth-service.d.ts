export default BaseOauthService;
/**
 * Interface for file connectors
 * @interface
 */
declare class BaseOauthService extends BaseService {
    generateToken(): void;
    refreshToken(): void;
    destroyToken(): void;
}
import BaseService from "./base-service";
