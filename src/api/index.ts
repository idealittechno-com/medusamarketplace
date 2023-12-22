import { Router } from "express"
import configLoader from "@medusajs/medusa/dist/loaders/config"
import { 
  registerLoggedInUser,
} from "./middlewares/logged-in-user"
import 
  authenticate 
from "@medusajs/medusa/dist/api/middlewares/authenticate"

// import * as cors from "cors"
import cors from "cors"

export default function (rootDirectory: string) {
  const router = Router()
  const config = configLoader(rootDirectory)

  const adminCors = {
    origin: config.projectConfig.admin_cors.split(","),
    credentials: true,
  }
  console.log(":==================adminCors:=============",adminCors);
  // router.use(
  //   '/\/admin\/[^(auth)].*/',
  //   cors(adminCors),
  //   authenticate(),
  //   registerLoggedInUser
  // )


  router.use(
    '/admin/store/',
  cors(adminCors),
    authenticate(),
    registerLoggedInUser
  )

  router.use(
    '/admin/products/',
      cors(adminCors),
    authenticate(),
    registerLoggedInUser
  )

  router.use(
    '/admin/orders/',
      cors(adminCors),
    authenticate(),
    registerLoggedInUser
  )
  return router
}