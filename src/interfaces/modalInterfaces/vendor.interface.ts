import { Document,Types } from 'mongoose';

/**
 * Interface that represent User
 * @interface
 */
export interface VendorInterface extends Document {
    name: string;
    status: boolean;
    isDeleted: boolean;
    categories: Types.ObjectId[];
    created_at: Date;
    updated_at: Date;

}