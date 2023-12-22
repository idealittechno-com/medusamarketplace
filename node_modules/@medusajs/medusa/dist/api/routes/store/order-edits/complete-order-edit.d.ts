import { Request, Response } from "express";
/**
 * @oas [post] /store/order-edits/{id}/complete
 * operationId: "PostOrderEditsOrderEditComplete"
 * summary: "Complete an Order Edit"
 * description: "Complete an Order Edit and reflect its changes on the original order. Any additional payment required must be authorized first using the Payment Collection API Routes."
 * externalDocs:
 *   description: "How to handle order edits in a storefront"
 *   url: "https://docs.medusajs.com/modules/orders/storefront/handle-order-edits"
 * parameters:
 *   - (path) id=* {string} The ID of the Order Edit.
 * x-codegen:
 *   method: complete
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.orderEdits.complete(orderEditId)
 *       .then(({ order_edit }) => {
 *         console.log(order_edit.id)
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/order-edits/{id}/complete'
 * tags:
 *   - Order Edits
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreOrderEditsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
