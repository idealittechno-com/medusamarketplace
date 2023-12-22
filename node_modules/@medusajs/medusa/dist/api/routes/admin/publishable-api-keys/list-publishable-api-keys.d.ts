import { Request, Response } from "express";
/**
 * @oas [get] /admin/publishable-api-keys
 * operationId: "GetPublishableApiKeys"
 * summary: "List Publishable API keys"
 * description: "Retrieve a list of publishable API keys. The publishable API keys can be filtered by fields such as `q`. The publishable API keys can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) q {string} term to search publishable API keys' titles.
 *   - (query) limit=20 {number} Limit the number of publishable API keys returned.
 *   - (query) offset=0 {number} The number of publishable API keys to skip when retrieving the publishable API keys.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned publishable API keys.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned publishable API keys.
 * x-codegen:
 *   method: list
 *   queryParams: GetPublishableApiKeysParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.publishableApiKeys.list()
 *       .then(({ publishable_api_keys, count, limit, offset }) => {
 *         console.log(publishable_api_keys)
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/publishable-api-keys' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Publishable Api Keys
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPublishableApiKeysListRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export default _default;
declare const GetPublishableApiKeysParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
/**
 * Parameters used to filter and configure the pagination of the retrieved publishable API keys.
 */
export declare class GetPublishableApiKeysParams extends GetPublishableApiKeysParams_base {
    /**
     * Search term to search publishable API keys' titles.
     */
    q?: string;
}
