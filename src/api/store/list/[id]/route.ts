import type {
  MedusaRequest, 
  MedusaResponse,
} from "@medusajs/medusa"

// import  StoreService from "../../../../services/store"
import StoreService  from '@medusajs/medusa/dist/services/store';

// list posts
export const GET = async (
  req: MedusaRequest, 
  res: MedusaResponse
) => {
  const storeService: StoreService = req.scope.resolve(
    "storeService"
  )

  res.json({
    list: await storeService.retrieve(req.body),
  })
}
