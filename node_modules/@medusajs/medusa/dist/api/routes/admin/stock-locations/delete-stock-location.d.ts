/**
 * @oas [delete] /admin/stock-locations/{id}
 * operationId: "DeleteStockLocationsStockLocation"
 * summary: "Delete a Stock Location"
 * description: "Delete a Stock Location."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Stock Location.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.stockLocations.delete(stockLocationId)
 *       .then(({ id, object, deleted }) => {
 *         console.log(id)
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/stock-locations/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Stock Locations
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminStockLocationsDeleteRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
