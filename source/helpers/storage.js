import { Store } from 'express-session';
import { NotFoundError } from './';

export class Storage extends Store {
    constructor() {
        super();
        this.sessions = [];
    }

    get = (sid, callback) => {
        try {
            let sess;
            this.sessions.forEach((session) => {
                if (session.sid === sid) {
                    sess = session.session;
                }
            });

            sess ? callback(null, sess) : callback(null, null);
        } catch (error) {
            callback(error, null);
        }
    };

    destroy = (sid, callback) => {
        try {
            this.sessions = this.sessions.map((session) => session.sid !== sid);
            callback(null);
        } catch (error) {
            callback(error);
        }
    }

    getAll = () => {
        try {
            return this.sessions;
        } catch (error) {
            throw error;
        }
    }

    destroyAll = () => {
        try {
            this.sessions = [];
        } catch (error) {
            throw error;
        }
    }

    set = (sid, sess, callback) => {
        try {
            const { cookie, user, agent} = sess;

            //NOT SURE THAT THIS VERIFICATION IS OK
            if (!user.email) {
                throw new NotFoundError('Could not find email in payload');
            }
            const sessionObj = {
                payload: user,
                agent:   agent,
                start:   new Date(cookie.expires.getTime() - cookie.originalMaxAge),
                end:     cookie.expires,
            };

            this.sessions.push({
                sid:     sid,
                payload: sessionObj,
                session: sess,
            });
            callback(null);
        } catch (error) {
            callback(error);
        }
    };
}

