
import { serviceResponse } from "../../utils/service.response";
import { Next } from "../../interfaces/request.interface";
import { ServiceResponseInterface } from "../../interfaces/service.response.interface";
import Category from "../../models/category.model";


class CategoryService {

    /***********************************************************************
     * Get Category List
     * @param next NextFunction
     * @returns 
     **********************************************************************/

    public async getCategory(next:Next):Promise<ServiceResponseInterface>{
        try{
            
            /******************Fetch All Categories*************/

            let categoryList=await Category.find({isDeleted:false,status:true});


            return serviceResponse(false, "Category Fetched Successfully",  {categoryList});

        }catch(err){
            next(err);
        }
    }


}
export default  new CategoryService;