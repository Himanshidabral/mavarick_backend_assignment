import { validate } from "../../helpers/validation.helper";
import * as Joi from "joi";
import _RS from "../../helpers/response.helper"
import { Next, ReqInterface, ResInterface } from "../../interfaces/request.interface";

class AuthValidation{

    static async login(req:ReqInterface,res:ResInterface,next:Next){   
        const schema= Joi.object().keys({
            email: Joi.string().email({ tlds: { allow: false } }).required().messages({
                'string.email': 'Email must be a valid email address',
                'string.empty': 'Email is required',
              }),
              password: Joi.string().required()
            });
        const isValid=await validate(req.body, res, schema);

        if(isValid){
            next();
        }
    }



 
    

  

    

}

export default AuthValidation