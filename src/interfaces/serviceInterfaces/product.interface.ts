
import { Next } from "../request.interface";
export interface ProductServiceInterface {
    addProduct(productData: any,next: Next): Promise<any>;
    getProducts(queryString: any,next: Next): Promise<any>;
    productDetail(productId:any,next:Next):Promise<any>;
    deleteProduct(productId:any,next:Next):Promise<any>;   
    editProduct(productId:any,data:any,next:Next):Promise<any>;   




}

