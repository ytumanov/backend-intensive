import { Store } from 'express-session';
import { NotFoundError } from './';

export class Storage extends Store {
    constructor() {
        super();
        this.sessions = [];
    }

    //todo
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
        } catch (error) {
            callback(error);
        }

        callback(null);
    };
}

