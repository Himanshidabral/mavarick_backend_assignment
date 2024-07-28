
import { serviceResponse } from "../../utils/service.response";
import { Next } from "../../interfaces/request.interface";
import { ServiceResponseInterface } from "../../interfaces/service.response.interface";


class ChartService {



    

    /***********************************************************************
     * Get Sales By Category Data
     * @param next NextFunction
     * @returns 
     **********************************************************************/

    public async getSalesByCategory(next:Next):Promise<ServiceResponseInterface>{
        try{
            
           let chart={
            labels: ['Electronics', 'Furniture', 'Clothing','Shoes','Books'],
            data: [12000, 15000, 8000,4000,7000]
             }


            return serviceResponse(false, "Chart Data Fetched Successfully",  {chart});

        }catch(err){
            next(err);
        }
    }

    /***********************************************************************
     * Get Monthly Revenue
     * @param next NextFunction
     * @returns 
     **********************************************************************/

    public async getMonthlyRevenue(next:Next):Promise<ServiceResponseInterface>{
        try{
            
           let chart={
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data: [5000, 7000, 6000, 8000, 9000, 11000, 13000, 12000, 14000, 16000, 18000, 20000]
            }


            return serviceResponse(false, "Chart Data Fetched Successfully",  {chart});

        }catch(err){
            next(err);
        }
    }

     /***********************************************************************
     * Get Yearly Sales
     * @param next NextFunction
     * @returns 
     **********************************************************************/

     public async getYearlySales(next:Next):Promise<ServiceResponseInterface>{
        try{
            
           let chart={
            labels: ['2018', '2019', '2020', '2021', '2022'],
            data: [45000, 50000, 55000, 60000, 65000]
            }


            return serviceResponse(false, "Chart Data Fetched Successfully",  {chart});

        }catch(err){
            next(err);
        }
    }


}
export default  new ChartService;