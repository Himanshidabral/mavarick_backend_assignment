import { model, Schema } from "mongoose";
import { AdminInterface } from "../interfaces/modalInterfaces/admin.interface";

const Admin= new Schema({
    email:{
        type: String,
        lowercase: true,
        trim: true,
        default: null

    },
    password:{
        type:String,
        default:null
    },
    name:{
        type:String,
        default:null
    },
    passwordChangedAt: {
        type: Date,
    }
}
, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
  })

export default  model<AdminInterface>('Admin',Admin);
