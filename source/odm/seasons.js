import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    String,
    order:   Number,
    title:   String,
    image:   String,
    subject: mongoose.SchemaTypes.ObjectId,
    lessons: [
        {
            lesson: mongoose.SchemaTypes.ObjectId,
        },
    ],
    description: String,
    created:     Date,
});

schema.index({ title: 'text', description: 'text' });

// Collection
export const seasons = mongoose.model('seasons', schema);
