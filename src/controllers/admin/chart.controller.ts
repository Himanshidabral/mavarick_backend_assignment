import { Next, ReqInterface, ResInterface } from "../../interfaces/request.interface";
import _RS from "../../helpers/response.helper";
import ChartService from "../../services/admin/chart.service";



class ChartController{

    async getSalesByCategory(req:ReqInterface,res:ResInterface,next:Next){
        try{
            
            const {error,message,data} = await ChartService.getSalesByCategory(next);
            if(error){
              return _RS.badRequest(res,"BAD_REQUEST",message,data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
  
        }catch(err){
          next(err);
        }
      }

      async getMonthlyRevenue(req:ReqInterface,res:ResInterface,next:Next){
        try{
            
            const {error,message,data} = await ChartService.getMonthlyRevenue(next);
            if(error){
              return _RS.badRequest(res,"BAD_REQUEST",message,data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
  
        }catch(err){
          next(err);
        }
      }
      async getYearlySales(req:ReqInterface,res:ResInterface,next:Next){
        try{
            
            const {error,message,data} = await ChartService.getYearlySales(next);
            if(error){
              return _RS.badRequest(res,"BAD_REQUEST",message,data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
  
        }catch(err){
          next(err);
        }
      }
    

}

export default new ChartController;