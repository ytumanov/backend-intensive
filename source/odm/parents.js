
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
    pupils: [
        {
            person: mongoose.Schema.Types.ObjectId,
        },
    ],
    description: String,
    created:     mongoose.Schema.Types.Date,
});

schema.index({ 'name.first': 1, 'name.last': -1 }, { name: 'flNames' });

// Collection
export const parents = mongoose.model('parents', schema);
