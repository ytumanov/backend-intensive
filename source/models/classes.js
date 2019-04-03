import v4 from 'uuid/v4';

// ODM
import { classes } from '../odm';

export class Classes {
    constructor(data) {
        this.data = data;
    }

    async find() {
        const data = await classes.find();

        return data;
    }

    async create() {
        const classInstance = {
            hash: v4(),
            ...this.data,
        };
        const data = await classes.create(classInstance);

        return data;
    }
}
