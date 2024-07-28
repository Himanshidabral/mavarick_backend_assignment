import { Next, ReqInterface, ResInterface } from "../../interfaces/request.interface";
import _RS from "../../helpers/response.helper";
import CategoryService from "../../services/admin/category.service";



class CategoryController{

  

      async getCategory(req:ReqInterface,res:ResInterface,next:Next){
        try{

            const {error,message,data} = await CategoryService.getCategory(next);
            if(error){
              return _RS.badRequest(res,"BAD_REQUEST",message,data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
  
        }catch(err){
          next(err);
        }
      }



}

export default new CategoryController;