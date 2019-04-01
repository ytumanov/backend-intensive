import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash: String,
    name: {
        first: String,
        last:  String,
    },
    image:       String,
    dateOfBirth: Date,
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
    class:   mongoose.SchemaTypes.ObjectId,
    parents: [
        {
            parent: mongoose.SchemaTypes.ObjectId,
        },
    ],
    description: String,
    started:     Date,
    created:     Date,
});

schema.index({ 'name.first': 1, 'name.last': 1 });

// Collection
export const persons = mongoose.model('persons', schema);
