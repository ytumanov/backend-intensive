
import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    String,
    title:   String,
    image:   String,
    seasons: [
        {
            season: mongoose.Schema.Types.ObjectId,
        },
    ],
    description: String,
    created:     mongoose.Schema.Types.Date,
});

schema.index({ title: 'text', description: 'text' });

// Collection
export const subjects = mongoose.model('subjects', schema);
