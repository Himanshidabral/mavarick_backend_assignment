import {Document,ObjectId} from 'mongoose';

export interface  AdminInterface extends Document{
    id:ObjectId;
    email:String;
    name:String;
    password:String;
    passwordChangedAt:Date;
    created_at: Date,
    updated_at: Date,
}

