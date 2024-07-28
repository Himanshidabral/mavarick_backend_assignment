
import { model, Schema,Types } from "mongoose";
import { AdminInterface } from "../interfaces/modalInterfaces/admin.interface";
import { VendorInterface } from "../interfaces/modalInterfaces/vendor.interface";


const VendorSchema = new Schema({
    name: {
        type: String,
        default:null,
    },
    status: {
        type: Boolean,
        default:true,
    },
    categories: [{
        type: Types.ObjectId,
        ref: 'Category'
    }],
    isDeleted:{
        type: Boolean,
        default:false,
    }    
}, {
    timestamps: {
        createdAt: 'created_at',    
        updatedAt: 'updated_at'
    }

})

export default  model<VendorInterface>('Vendor',VendorSchema);
