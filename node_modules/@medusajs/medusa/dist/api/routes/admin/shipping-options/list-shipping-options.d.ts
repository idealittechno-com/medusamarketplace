/**
 * @oas [get] /admin/shipping-options
 * operationId: "GetShippingOptions"
 * summary: "List Shipping Options"
 * description: "Retrieve a list of Shipping Options. The shipping options can be filtered by fields such as `region_id` or `is_return`."
 * x-authenticated: true
 * parameters:
 *  - in: query
 *    name: region_id
 *    schema:
 *      type: string
 *    description: Filter by a region ID.
 *  - in: query
 *    name: is_return
 *    description: Filter by whether the shipping option is used for returns or orders.
 *    schema:
 *      type: boolean
 *  - in: query
 *    name: admin_only
 *    schema:
 *      type: boolean
 *    description: Filter by whether the shipping option is used only by admins or not.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetShippingOptionsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.shippingOptions.list()
 *       .then(({ shipping_options, count }) => {
 *         console.log(shipping_options.length);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/shipping-options' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Shipping Options
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminShippingOptionsListRes"
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
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * Parameters used to filter the retrieved shipping options.
 */
export declare class AdminGetShippingOptionsParams {
    /**
     * Filter shipping options by the ID of the region they belong to.
     */
    region_id?: string;
    /**
     * Filter shipping options by whether they're return shipping options.
     */
    is_return?: boolean;
    /**
     * Filter shipping options by whether they're available for admin users only.
     */
    admin_only?: boolean;
}
