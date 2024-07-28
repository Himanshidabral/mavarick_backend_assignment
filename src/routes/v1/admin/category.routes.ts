import { Router } from "express";
import GlobalMiddleware from "../../../middlewares/global.middleware";
import CategoryController from "../../../controllers/admin/category.controller";
class CategoryRoutes {
    public router: Router;

    constructor(){
        this.router=Router();
        this.get();
    }

    public get() {
        this.router.get('/list',GlobalMiddleware.authenticateAdmin,CategoryController.getCategory);
    }



}

export default new CategoryRoutes().router;