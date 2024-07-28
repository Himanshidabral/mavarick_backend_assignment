import { model, Schema } from "mongoose";
import { ProductInterface } from "../interfaces/modalInterfaces/product.interface";

const ProductSchema= new Schema({
    name:{
        type:String,
        default:null
    },
    price:{
        type:Number,
        default:0
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    discount:{
        type:Number,
        default:null
    },
    discountType:{
        type:String,
        default:'fixed_number',
        enum:['fixed_number','percentage']
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    size:{
        type:String,
        default:0
    },
    vendorId:{
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    status:{
        type:Boolean,
        default:true
    }
}, {
    timestamps: {
        createdAt: 'created_at',    
        updatedAt: 'updated_at'
    }

})

export default  model<ProductInterface>('Product',ProductSchema);
