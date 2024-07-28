import { Router } from "express";
import AuthAdminRoutes from "./v1/admin/auth.routes";
import ProductRoutes from "./v1/admin/product.routes";
import CategoryRoutes from "./v1/admin/category.routes";
import VendorRoutes from "./v1/admin/vendor.routes";
import ChartRoutes from "./v1/admin/chart.routes";


class Routes {
  public router: Router;
  constructor() {
    this.router = Router();

    this.admin();
  }




  admin() {
    this.router.use('/admin/auth', AuthAdminRoutes);
    this.router.use('/admin/product', ProductRoutes);
    this.router.use('/admin/category', CategoryRoutes);
    this.router.use('/admin/vendor', VendorRoutes);
    this.router.use('/admin/chart', ChartRoutes);



  }

}
export default new Routes().router;