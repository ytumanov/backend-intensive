import { Store } from 'express-session';

export class Storage extends Store {
    constructor() {
        super();
        this.prototype.set = (id, sess, callback) => {
            try {
                const jsonSess = JSON.stringify(sess);
                console.log('----------------------------------');
                console.log(jsonSess);
            } catch (er) {
                return callback(er);
            }
        };
        this.sessions = [];
    }

    // _set(id, sess, callback) {
    //     try {
    //         const jsonSess = JSON.stringify(sess);
    //         console.log('----------------------------------');
    //         console.log(jsonSess);
    //     } catch (er) {
    //         return callback(er);
    //     }
    // }
}


// Store.set(req.sessionID, sessionObj, () => {
//   console.log('----------------------------------');
//   console.log('success');
//   console.log(req.sessionID);
//   console.log(sessionObj);
// });

