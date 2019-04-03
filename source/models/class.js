import v4 from 'uuid/v4';

// ODM
import { classes } from '../odm';

export class Class {
    constructor(data, params) {
        this.data = data;
        this.params = params;
    }

    async find() {
        const { id } = this.params;
        const data = await classes.findOne({ _id: id });

        return data;
    }

    async update() {
        const { id } = this.params;

        const classInstance = {
            hash: v4(),
            ...this.data,
        };

        const data = await classes.findOneAndUpdate({ _id: id }, classInstance, { new: true });

        return data;
    }

    async delete() {
        const { id } = this.params;
        await classes.findOneAndDelete({ _id: id });
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
