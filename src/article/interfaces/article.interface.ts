import { Document } from 'mongoose';

export interface Article extends Document {
    readonly title: string;
    readonly description: string;
    readonly updatedAt: string;
}
