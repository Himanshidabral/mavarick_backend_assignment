import { Router } from "express";
import GlobalMiddleware from "../../../middlewares/global.middleware";
import ProductController from "../../../controllers/admin/product.controller";
import ProductValidation from "../../../validators/admin/product.validation";
class ProductRoutes {
    public router: Router;

    constructor(){
        this.router=Router();
        this.get();
        this.patch();
        this.post();
        this.put();
        this.delete();

    }

    public get() {
        this.router.get('/list',GlobalMiddleware.authenticateAdmin,ProductController.getProducts);
        this.router.get('/detail/:id',GlobalMiddleware.authenticateAdmin,ProductController.productDetail);
    }

    public post() {
        this.router.post('/add',GlobalMiddleware.authenticateAdmin,ProductValidation.addProduct,ProductController.createProduct)
    }


    public patch() {
    }

    public put() {
        this.router.put('/edit/:id',GlobalMiddleware.authenticateAdmin,ProductValidation.editProduct,ProductController.editProduct)
 
    }

    public delete() {
        this.router.delete('/delete/:id',GlobalMiddleware.authenticateAdmin,ProductController.deleteProduct)
    }

}

export default new ProductRoutes().router;