import { Router } from "express";
import GlobalMiddleware from "../../../middlewares/global.middleware";
import VendorController from "../../../controllers/admin/vendor.controller";
class VendorRoutes {
    public router: Router;

    constructor(){
        this.router=Router();
        this.get();
    }

    public get() {
        this.router.get('/list',GlobalMiddleware.authenticateAdmin,VendorController.getVendor);
    }



}

export default new VendorRoutes().router;