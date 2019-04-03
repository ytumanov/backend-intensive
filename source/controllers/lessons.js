import { Lessons as LessonsModel } from '../models';

export class Lessons {
    constructor(data) {
        this.models = {
            lessons: new LessonsModel(data),
        };
    }

    async find() {
        const data = await this.models.lessons.find();

        return data;
    }

    async create() {
        const data = await this.models.lessons.create();

        return data;
    }
}
