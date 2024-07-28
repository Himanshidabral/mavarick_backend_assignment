import {Document,ObjectId} from 'mongoose';

export interface  ProductInterface extends Document{
    id:ObjectId,
    name:String,
    price:Number,
    isDeleted:Boolean,
    discount:Number,
    discountType: String,
    categoryId: ObjectId,
    size: String,
    vendorId: ObjectId,
    status:Boolean,
    created_at: Date,
    updated_at: Date


}

