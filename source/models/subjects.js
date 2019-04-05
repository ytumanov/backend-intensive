import v4 from 'uuid/v4';

// ODM
import { seasons, lessons } from '../odm';

export class Subjects {
    constructor(data) {
        this.data = data;
    }

    async findSeason() {
        const { id } = this.data;
        const data = await seasons
            .find({ subject: id })
            .populate({ path: 'seasons.season', select: '-_id -__v' })
            .select('-_id -__v')
            .lean();

        return data;
    }

    async createSeason() {
        const season = {
            hash: v4(),
            ...this.data,
        };
        const data = await seasons.create(season);

        return data;
    }

    async findLesson() {
        const { subjectsId, seasonId } = this.data;
        const data = await lessons
            .find({
                subject: subjectsId,
                season:  seasonId,
            })
            .populate({ path: 'lessons.lesson', select: '-_id -__v' })
            .select('-_id -__v')
            .lean();

        return data;
    }

    async createLesson() {
        const lesson = {
            hash: v4(),
            ...this.data,
        };
        const data = await lessons.create(lesson);

        return data;
    }
}
