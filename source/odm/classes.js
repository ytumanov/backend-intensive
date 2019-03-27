
import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:       String,
    order:      mongoose.Schema.Types.Number,
    title:      String,
    image:      String,
    room:       mongoose.Schema.Types.Number,
    floor:      mongoose.Schema.Types.Number,
    gradebooks: [
        {
            gradebook: mongoose.Schema.Types.ObjectId,
        },
    ],
    description: String,
    created:     mongoose.Schema.Types.Date,
});

schema.index({ title: 'text', description: 'text' });
schema.index({ order: 1 }, { name: 'orders' });
schema.index({ room: 1 }, { name: 'rooms' });

// Collection
export const classes = mongoose.model('classes', schema);
