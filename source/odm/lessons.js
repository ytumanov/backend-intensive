
import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    String,
    order:   String,
    title:   String,
    image:   String,
    subject: mongoose.Schema.Types.ObjectId,
    season:  mongoose.Schema.Types.ObjectId,
    created: mongoose.Schema.Types.Date,
});

schema.index({ title: 1 }, { name: 'lessons' });

// Collection
export const lessons = mongoose.model('lessons', schema);
