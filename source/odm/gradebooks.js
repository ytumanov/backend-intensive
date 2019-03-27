
import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    String,
    image:   String,
    year:    mongoose.Schema.Types.Number,
    class:   String,
    records: [
        {
            personHash:  mongoose.Schema.Types.ObjectId,
            teacherHash: mongoose.Schema.Types.ObjectId,
            subjectHash: mongoose.Schema.Types.ObjectId,
            seasonHash:  mongoose.Schema.Types.ObjectId,
            lessonHash:  mongoose.Schema.Types.ObjectId,
            mark:        mongoose.Schema.Types.Number,
        },
    ],
    description: String,
    created:     mongoose.Schema.Types.Date,
});

schema.index({ year: 1 }, { name: 'years' });
schema.index({ class: 1 }, { name: 'classes' });

// Collection
export const gradebooks = mongoose.model('gradebooks', schema);
