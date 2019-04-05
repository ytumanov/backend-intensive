import { Subjects as SubjectsModel } from '../models';

export class Subjects {
    constructor(data) {
        this.models = {
            subjects: new SubjectsModel(data),
        };
    }

    async findSeason() {
        const data = await this.models.subjects.findSeason();

        return data;
    }

    async createSeason() {
        const data = await this.models.subjects.createSeason();

        return data;
    }

    async findLesson() {
        const data = await this.models.subjects.findLesson();

        return data;
    }

    async createLesson() {
        const data = await this.models.subjects.createLesson();

        return data;
    }
}
