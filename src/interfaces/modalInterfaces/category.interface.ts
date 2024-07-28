import { Document } from 'mongoose';

/**
 * Interface that represent User
 * @interface
 */
export interface CategoryInterface extends Document {
    name: string;
    status: boolean;
    isDeleted: boolean;
    created_at: Date;
    updated_at: Date;
}