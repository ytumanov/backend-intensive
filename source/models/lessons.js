import v4 from 'uuid/v4';

// ODM
import { lessons } from '../odm';

export class Lessons {
    constructor(data) {
        this.data = data;
    }

    async find() {
        const data = await lessons.find();

        return data;
    }

    async create() {
        const lesson = {
            hash: v4(),
            ...this.data,
        };
        const data = await lessons.create(lesson);

        return data;
    }
}
