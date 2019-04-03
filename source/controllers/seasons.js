import { Seasons as SeasonsModel } from '../models';

export class Seasons {
    constructor(data) {
        this.models = {
            seasons: new SeasonsModel(data),
        };
    }

    async find() {
        const data = await this.models.seasons.find();

        return data;
    }

    async create() {
        const data = await this.models.seasons.create();

        return data;
    }
}
