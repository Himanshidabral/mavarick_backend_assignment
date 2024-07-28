import { validate } from "../../helpers/validation.helper";
import * as Joi from "joi";
import _RS from "../../helpers/response.helper"
import { Next, ReqInterface, ResInterface } from "../../interfaces/request.interface";

class ProductValidation{

    

    static async addProduct(req: ReqInterface, res: ResInterface, next: Next) {
        
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            price:Joi.number().required(),
            discount: Joi.number().required(),
            categoryId:Joi.string().required(),
            vendorId: Joi.string().required(),
            size:Joi.string().required(),
            status:Joi.optional()
        })
        const isValid = await validate(req.body, res, schema);

        if (isValid) {
            next();
        }
    }

    static async editProduct(req: ReqInterface, res: ResInterface, next: Next) {
        const schema = Joi.object().keys({
            name: Joi.string().optional(),
            price:Joi.number().optional(),
            discount: Joi.number().optional(),
            categoryId:Joi.string().optional(),
            vendorId: Joi.string().optional(),
            size:Joi.string().optional(),
            status:Joi.optional()
        })
        const isValid = await validate(req.body, res, schema);

        if (isValid) {
            next();
        }
    }  
}

export default ProductValidation