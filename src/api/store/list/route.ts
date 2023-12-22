import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

import  StoreService from "../../../services/store"
// import  StoreRepository from "../../../repositories/store"
// import StoreRepository from '@medusajs/medusa/dist/repositories/store';

import { EntityManager } from "typeorm"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {

  const onlystore = req.body.onlystore ? req.body.onlystore: 0;
  const searchStore = req.body.q ? req.body.q: '';
  console.log("Requested onlystore ================", onlystore);
  console.log("Requested searchStore ================", searchStore);

  const storeService: StoreService = req.scope.resolve(
    "storeService"
  )

  res.json({
    store: await storeService.retrieveAll(onlystore, searchStore),
 })
    // const storeRepository = 
    //  req.scope.resolve("storeRepository")
    // const manager = req.scope.resolve<EntityManager>("manager")
    // const storeRepo = manager.withRepository(storeRepository)
    // res.json({
    // list: await storeRepo.find(),
    // })

}