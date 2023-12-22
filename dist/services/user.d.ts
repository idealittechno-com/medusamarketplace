import { UserService as MedusaUserService } from "@medusajs/medusa";
import { User } from "../models/user";
import { CreateUserInput as MedusaCreateUserInput } from "@medusajs/medusa/dist/types/user";
import StoreRepository from "../repositories/store";
type CreateUserInput = {
    store_id?: string;
} & MedusaCreateUserInput;
declare class UserService extends MedusaUserService {
    static LIFE_TIME: import("awilix").LifetimeType;
    protected readonly loggedInUser_: User | null;
    protected readonly storeRepository_: typeof StoreRepository;
    constructor(container: any, options: any);
    create(user: CreateUserInput, password: string): Promise<User>;
}
export default UserService;
