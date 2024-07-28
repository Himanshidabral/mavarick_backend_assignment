import { Next, ReqInterface, ResInterface } from "../../interfaces/request.interface";
import _RS from "../../helpers/response.helper";
import ProductService from "../../services/admin/product.service";



class ProductController{

    async createProduct(req:ReqInterface,res:ResInterface,next:Next){
        try{
            const reqData=req.body;
            const {error,message,data} = await ProductService.addProduct(reqData,next);
            if(error){
              return _RS.badRequest(res,"BAD_REQUEST",message,data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
  
        }catch(err){
          next(err);
        }
      }

      async getProducts(req:ReqInterface,res:ResInterface,next:Next){
        try{
            const query=req.query;
            const {error,message,data} = await ProductService.getProducts(query,next);
            if(error){
              return _RS.badRequest(res,"BAD_REQUEST",message,data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
  
        }catch(err){
          next(err);
        }
      }


      async productDetail(req:ReqInterface,res:ResInterface,next:Next){
        try{
            const productId=req.params.id
            const {error,message,data} = await ProductService.productDetail(productId,next);
            if(error){
              return _RS.badRequest(res,"BAD_REQUEST",message,data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
  
        }catch(err){
          next(err);
        }
      }

      async deleteProduct(req:ReqInterface,res:ResInterface,next:Next){
        try{
            const productId=req.params.id
            const {error,message,data} = await ProductService.deleteProduct(productId,next);
            if(error){
              return _RS.badRequest(res,"BAD_REQUEST",message,data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
  
        }catch(err){
          next(err);
        }
      }  

      async editProduct(req:ReqInterface,res:ResInterface,next:Next){
        try{
            const productId=req.params.id;
            const reqData=req.body;
            const {error,message,data} = await ProductService.editProduct(productId,reqData,next);
            if(error){
              return _RS.badRequest(res,"BAD_REQUEST",message,data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
  
        }catch(err){
          next(err);
        }
      }  

      


}

export default new ProductController;