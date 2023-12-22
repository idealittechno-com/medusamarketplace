import { default as Joi } from "joi";
declare module "joi" {
    interface Root {
        objectId: Joi.StringSchema;
        address: <T>() => Joi.AlternativesSchema;
        dateFilter: <T>() => Joi.ObjectSchema<T>;
        orderFilter: <T>() => Joi.ObjectSchema<T>;
        productFilter: <T>() => Joi.ObjectSchema<T>;
    }
}
export default Joi;
