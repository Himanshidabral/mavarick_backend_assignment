import { Next, ReqInterface, ResInterface } from "../../interfaces/request.interface";
import _RS from "../../helpers/response.helper";
import VendorService from "../../services/admin/vendor.service";



class VendorController{

  

      async getVendor(req:ReqInterface,res:ResInterface,next:Next){
        try{
            const query=req.query;

            const {error,message,data} = await VendorService.getVendor(query,next);
            
            if(error){
              return _RS.badRequest(res,"BAD_REQUEST",message,data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
  
        }catch(err){
          next(err);
        }
      }



}

export default new VendorController;