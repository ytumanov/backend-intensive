
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
            primary: mongoose.Schema.Types.Boolean,
        },
    ],
    phones: [
        {
            phone:   String,
            primary: mongoose.Schema.Types.Boolean,
        },
    ],
    sex:    String,
    social: {
        facebook: String,
        linkedIn: String,
        skype:    String,
        telegram: String,
    },
    class:   mongoose.Schema.Types.ObjectId,
    parents: [
        {
            parent: mongoose.Schema.Types.ObjectId,
        },
    ],
    description: String,
    started:     mongoose.Schema.Types.Date,
    created:     mongoose.Schema.Types.Date,
});

// Collection
export const persons = mongoose.model('persons', schema);
