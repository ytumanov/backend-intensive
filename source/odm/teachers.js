import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash: String,
    name: {
        first: String,
        last:  String,
    },
    image:       String,
    dateOfBirth: mongoose.Schema.Types.Date,
    emails:      [
        {
            email: {
                type:   String,
                unique: true,
            },
            primary: Boolean,
        },
    ],
    phones: [
        {
            phone:   String,
            primary: Boolean,
        },
    ],
    sex:    String,
    social: {
        facebook: String,
        linkedIn: String,
        skype:    String,
        telegram: String,
    },
    subjects: [
        {
            subject: mongoose.Schema.Types.ObjectId,
        },
    ],
    description: String,
    started:     mongoose.Schema.Types.Date,
    created:     mongoose.Schema.Types.Date,
});

// Collection
export const teachers = mongoose.model('teachers', schema);
