import { Class as ClassModel } from '../models';

export class Class {
    constructor(data, params) {
        this.models = {
            class: new ClassModel(data, params),
        };
    }

    async find() {
        const data = await this.models.class.find();

        return data;
    }

    async update() {
        const data = await this.models.class.update();

        return data;
    }

    async delete() {
        await this.models.class.update();
    }

    async create() {
        const data = await this.models.class.create();

        return data;
    }
}
