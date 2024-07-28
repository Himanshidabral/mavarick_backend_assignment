
import { serviceResponse } from "../../utils/service.response";
import { Next } from "../../interfaces/request.interface";
import { ServiceResponseInterface } from "../../interfaces/service.response.interface";
import Vendor from "../../models/vendor.model";
import mongoose from "mongoose";


class VendorService {



    

    /***********************************************************************
     * Get Vendor List
     * @param queryString:categoryId
     * @param next NextFunction
     * @returns 
     **********************************************************************/

    public async getVendor(queryString:any,next:Next):Promise<ServiceResponseInterface>{
        try{
            
            /******************Fetch All Categories*************/
            const {category}=queryString

            let vendorList=await Vendor.find({isDeleted:false,status:true,categories: category});
            return serviceResponse(false, "Vendor Fetched Successfully",  {vendorList});

        }catch(err){
            next(err);
        }
    }


}
export default  new VendorService;