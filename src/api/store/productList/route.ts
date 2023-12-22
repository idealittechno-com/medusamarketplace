import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

import  ProductService from "../../../services/product"
// import  StoreRepository from "../../../repositories/store"
// import StoreRepository from '@medusajs/medusa/dist/repositories/store';

import { EntityManager } from "typeorm"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const productService: ProductService = req.scope.resolve(
    "productService"
  )
  res.json({
    products: await productService.retrieveAll(),
 })
}