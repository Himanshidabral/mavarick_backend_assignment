import { Router } from "express";
import GlobalMiddleware from "../../../middlewares/global.middleware";
import chartController from "../../../controllers/admin/chart.controller";
class ChartRoutes {
    public router: Router;

    constructor(){
        this.router=Router();
        this.get();
    }

    public get() {
        this.router.get('/sales-by-category',GlobalMiddleware.authenticateAdmin,chartController.getSalesByCategory);
        this.router.get('/monthly-revenue',GlobalMiddleware.authenticateAdmin,chartController.getMonthlyRevenue);
        this.router.get('/yearly-sales',GlobalMiddleware.authenticateAdmin,chartController.getYearlySales);

    }



}

export default new ChartRoutes().router;