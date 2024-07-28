import { ProductInterface } from "../../interfaces/modalInterfaces/product.interface";
import { serviceResponse } from "../../utils/service.response";
import { Features } from "../../utils/features";
import { ProductServiceInterface } from "../../interfaces/serviceInterfaces/product.interface";
import { Next } from "../../interfaces/request.interface";
import { ServiceResponseInterface } from "../../interfaces/service.response.interface";
import Product from "../../models/product.model";

class ProductService implements ProductServiceInterface{



    /***********************************************************************
     * Edit Product
     * @param userId any
     * @param eventId any
     * @param next NextFunction
     * @returns 
     **********************************************************************/
    public async editProduct(productId: any,data:any, next: Next): Promise<ServiceResponseInterface> {
        try{
            const {name,price,discount,categoryId,size,vendorId}=data;
            let product: ProductInterface = await Product.findOne({_id:productId});
            /****************** If Product Not Exist *************/
            if(!product){
                return serviceResponse(true, "Product does not exist!", {})
            }
            /****************** If Product Name Already Exist *************/
            if(name){
                let checkNameDuplicate=await Product.findOne({name:name,_id:{$ne:productId}});
                console.log(checkNameDuplicate)
                if(checkNameDuplicate){
                        return serviceResponse(true, "Product Name already Exist!", {})
                }
            }
            /****************** Update All Data *************/
            product.name=name??product.name;
            product.price=price??product.price;
            product.discount=discount??product.discount;
            product.categoryId=categoryId??product.categoryId;
            product.size=size??product.size;
            product.vendorId=vendorId??product.vendorId;
            product.save();
            return serviceResponse(false, "Product Updated SuccessFully!", product);
        
        }catch(err){
            next(err);
        }      
        
     }    
     /***********************************************************************
     * Add Product
     * @param productData: any
     * @param next NextFunction
     * @returns 
     **********************************************************************/

    public async addProduct(productData:any,next:Next):Promise<ServiceResponseInterface>{
        try{
                
            /******************Find Product By Name*************/
            let product:ProductInterface=await Product.findOne({name:productData?.name});
            if(product){
            return serviceResponse(true, "Product with this name already exist!!", {})
            }
                /******************Create Product*************/

            await Product.create(productData);
            return serviceResponse(false, "Product Created!",{});

        }catch(err){
            next(err);
        }
    }


    /***********************************************************************
     * Get Product List
     * @param queryString: any
     * @param next NextFunction
     * @returns 
     **********************************************************************/

    public async getProducts(queryString:any,next:Next):Promise<ServiceResponseInterface>{
        try{
            
            /******************Fetch All Products*************/

            let queryProduct= Product.find({isDeleted:false,status:true}).populate('vendorId').populate('categoryId');

            /****************** Get Total Count  *************/

            let countQuery = Product.find({ isDeleted:false,status:true});
            const totalCount=new Features(countQuery,queryString).getCount();
            const count = await totalCount.query;
            /****************** Adding pagination and sorting to our list *************/

            const apiFeatures = new Features(queryProduct, queryString)
                .filtering()
                .sorting('created_at')
                .pagination();
    
            const products = await apiFeatures.query;
            const currentPage=queryString?.page??1
            return serviceResponse(false, "Products Fetched Successfully",  {products,count,currentPage});

        }catch(err){
            next(err);
        }
    }

    /***********************************************************************
     * Product Detail
     * @param productId 
     * @param next 
     * @returns 
    **********************************************************************/
    public async productDetail(productId:any,next:Next):Promise<ServiceResponseInterface>{
        try{
            let product:ProductInterface=await Product.findOne({_id:productId});
            
            if(!product){
                return serviceResponse(true, "Product does not exist!",{});
            }
            return serviceResponse(false, "Product fetched successfully!",product);
        }catch(err){
            next(err);
        }
    }

    /***********************************************************************
     * Product Delete
     * @param productId 
     * @param next 
     * @returns 
    **********************************************************************/

    public async deleteProduct(productId:any,next:Next):Promise<ServiceResponseInterface>{
        try{
            let deleteProduct=await Product.deleteOne({_id:productId});

            if(deleteProduct && deleteProduct.deletedCount==0){
                return serviceResponse(true, "Product does not exist!",{});
            }
            return serviceResponse(false, "Product has been deleted successfully!",{});
        }catch(err){
            next(err);
        }        


    }


        


    



}
export default  new ProductService;