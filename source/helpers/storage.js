import { Store } from 'express-session';
import { NotFoundError } from './';

export class Storage extends Store {
    constructor() {
        super();
        this.sessions = [];
    }

    get = (sid, callback) => {
        try {
            console.log('=========================');
            console.log(sid);
            this.sessions.forEach((session) => {
                console.log('ssssssss');
                console.log(session.sid);
                if (session.sid === sid) {
                    callback(null, session.session);
                }
            });


            callback(null, null);
        } catch (error) {
            callback(error, null);
        }
    };

    destroy = (sid, callback) => {
        try {
            console.log('DEEEESTROOOOY');
            this.sessions = this.sessions.map((session) => session.sid !== sid);
            callback(null);
        } catch (error) {
            callback(error);
        }
    }

    all = (callback) => {
        try {
            const sessions = this.sessions.map((session) => session.session);
            callback(null, sessions);
        } catch (error) {
            callback(error, null);
        }
    }

    clear = (callback) => {
        try {
            this.sessions = [];
            callback(null);
        } catch (error) {
            callback(error);
        }
    }

    set = (sid, sess, callback) => {
        try {
            console.log(JSON.stringify('aaaatatataat'));
            const { cookie, user, agent} = sess;

            console.log(JSON.stringify(cookie));


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
            console.log(JSON.stringify(this.sessions));
            callback(null);
        } catch (error) {
            callback(error);
        }
    };
}

