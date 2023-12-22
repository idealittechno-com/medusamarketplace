/**
 * @oas [get] /admin/gift-cards
 * operationId: "GetGiftCards"
 * summary: "List Gift Cards"
 * description: "Retrieve a list of Gift Cards. The gift cards can be filtered by fields such as `q`. The gift cards can also paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) offset=0 {number} The number of gift cards to skip when retrieving the gift cards.
 *   - (query) limit=50 {number} Limit the number of gift cards returned.
 *   - (query) q {string} a term to search gift cards' code or display ID
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetGiftCardsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.giftCards.list()
 *       .then(({ gift_cards, limit, offset, count }) => {
 *         console.log(gift_cards.length);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/gift-cards' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Gift Cards
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminGiftCardsListRes"
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
 * Parameters used to filter and configure the pagination of the retrieved gift cards.
 */
export declare class AdminGetGiftCardsParams {
    /**
     * {@inheritDoc FindPaginationParams.limit}
     * @defaultValue 50
     */
    limit: number;
    /**
     * {@inheritDoc FindPaginationParams.offset}
     * @defaultValue 0
     */
    offset: number;
    /**
     * Search term to search gift cards by their code and display ID.
     */
    q?: string;
}
