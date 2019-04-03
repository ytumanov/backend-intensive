import { Classes as ClassesModel } from '../models';

export class Classes {
    constructor(data) {
        this.models = {
            classes: new ClassesModel(data),
        };
    }

    async find() {
        const data = await this.models.classes.find();

        return data;
    }

    async create() {
        const data = await this.models.classes.create();

        return data;
    }
}
