import { MedusaRequest, MedusaResponse, User, UserService } from "@medusajs/medusa";
import  OrderService from "../../../services/order"
// import { EntityManager } from "typeorm"
import {  Selector as Selector } from "@medusajs/medusa/dist/types/common"
import { 
  registerLoggedInUser,
} from "../../middlewares/logged-in-user"
// export async function GET(
//   req: MedusaRequest,
//   res: MedusaResponse
// ): Promise<void> {
//   res.sendStatus(200);
// }

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse,
) => {
  const orderService: OrderService = req.scope.resolve(
    "orderService"
  )

  let loggedInUser: User | null = null

  console.log("requested user : =========",req.user);
  console.log("userId user : =========",req.user.userId);

  if (req.user && req.user.userId) {
    const userService = 
      req.scope.resolve("userService") as UserService
    loggedInUser = await userService.retrieve(req.user.userId)
  }
  req.scope.register({
    loggedInUser: {
      resolve: () => loggedInUser,
     },
   })
   
  res.json({
    orders: await orderService.topSell(loggedInUser),
 })
}

