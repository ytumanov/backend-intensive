
import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    String,
    order:   mongoose.Schema.Types.Number,
    title:   String,
    image:   String,
    subject: mongoose.Schema.Types.ObjectId,
    lessons: [
        {
            lesson: mongoose.Schema.Types.ObjectId,
        },
    ],
    description: String,
    created:     mongoose.Schema.Types.Date,
});

schema.index({ title: 'text', description: 'text' });

// Collection
export const seasons = mongoose.model('seasons', schema);
