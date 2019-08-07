import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    updatedAt: { type: Date, default: Date.now },
})
