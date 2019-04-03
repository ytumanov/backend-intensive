import v4 from 'uuid/v4';

// ODM
import { seasons } from '../odm';

export class Seasons {
    constructor(data) {
        this.data = data;
    }

    async find() {
        const data = await seasons.find();

        return data;
    }

    async create() {
        const season = {
            hash: v4(),
            ...this.data,
        };
        const data = await seasons.create(season);

        return data;
    }
}
