import { User } from "../models/user";
export declare const UserRepository: import("typeorm").Repository<User> & {
    target: import("typeorm").EntityTarget<import("@medusajs/medusa").User> & typeof User;
    manager: import("typeorm").EntityManager;
    queryRunner?: import("typeorm").QueryRunner;
};
export default UserRepository;
