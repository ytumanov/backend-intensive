import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:  String,
    order: {
        type:  Number,
        index: true,
    },
    title: String,
    image: String,
    room:  {
        type:  Number,
        index: true,
    },
    floor:      Number,
    gradebooks: [
        {
            gradebook: mongoose.SchemaTypes.ObjectId,
        },
    ],
    description: String,
    created:     Date,
});

schema.index({ title: 'text', description: 'text' });

// Collection
export const classes = mongoose.model('classes', schema);
