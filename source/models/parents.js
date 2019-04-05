// Core
import v4 from 'uuid/v4';

// Instruments
import { parents } from '../odm';

export class Parents {
    constructor(data) {
        this.data = data;
    }

    async findAllPupils() {
        const data = await parents
            .find()
            .populate({ path: 'pupils', select: '-_id -__v' })
            .select('-_id -__v')
            .lean();

        return data;
    }

    async createPupils() {
        const pupil = {
            hash: v4(),
            ...this.data,
        };
        const data = await parents.create(pupil);

        return data;
    }
}
