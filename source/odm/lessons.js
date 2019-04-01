import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:  String,
    order: Number,
    title: {
        type:  String,
        index: true,
    },
    image:   String,
    subject: mongoose.SchemaTypes.ObjectId,
    season:  mongoose.SchemaTypes.ObjectId,
},
{ timestamps: { createdAt: 'created', updatedAt: 'modified' } });

schema.index({ 'name.first': 1, 'name.last': 1 });

// Collection
export const lessons = mongoose.model('lessons', schema);
