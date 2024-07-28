
import { model, Schema } from "mongoose";
import { AdminInterface } from "../interfaces/modalInterfaces/admin.interface";
import { CategoryInterface } from "../interfaces/modalInterfaces/category.interface";


const CategorySchema = new Schema({
    name: {
        type: String,
        default:null,
    },
    status: {
        type: Boolean,
        default:true,
    },
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

export default  model<CategoryInterface>('Category',CategorySchema);
