import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    method:   String,
    path:     String,
    duration: {
        start: mongoose.SchemaTypes.Date,
        end:   mongoose.SchemaTypes.Date,
    },
    payload: Object,
    agent:   String,
});
schema.set('autoIndex', false);
schema.set('capped', { size: 51200, max: 50000 });
schema.set('timestamps', { createdAt: 'created', updatedAt: false });

// Collection
export const logs = mongoose.model('logs', schema);
