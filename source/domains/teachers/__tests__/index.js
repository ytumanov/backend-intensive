// Core
import request from 'supertest';

// Instruments
import { app } from '../../../server';

let server = request.agent(app);

const checkHeader = (response) => {
    expect(response.header[ 'content-type' ]).toEqual(
        expect.stringContaining('application/json'),
    );
};

describe('teachers', () => {
    test('should return 200 for getting all teachers', async (done) => {
        const response = await server.get('/api/teachers');
        checkHeader(response);

        expect(response.statusCode).toBe(200);
        done();
    });

    test('should return 200 for getting all teachers and data should be an array', async (done) => {
        const response = await server.get('/api/teachers');
        const { data } = response.body;
        checkHeader(response);

        expect(Array.isArray(data)).toBeTruthy();
        done();
    });

    describe('protected calls', () => {
        beforeAll(async (done) => {
            const email = 'jdoe@email.com';
            const password = 'atata';
            const response = await server.post('/api/auth/login').send({ email, password });

            expect(response.statusCode).toBe(204);

            const cookie = response.headers[ 'set-cookie' ][ 0 ];

            // This is not a documented behavior and should be used carefully
            server.jar.setCookie(cookie);

            done();
        });

        test('should return 200 and data from protected teachers post endpoint', async (done) => {
            const userData = {
                name: {
                    first: 'Yaroslav',
                },
                address: 'Dragomanova',
            };

            const response = await server.post('/api/teachers').send(userData);
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(Array.isArray(data)).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected teachers get endpoint /:teacherId/subjects', async (done) => {
            const response = await server.get('/api/teachers/1/subjects');
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(Array.isArray(data)).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected teachers post endpoint /:teacherId/subjects', async (done) => {
            const response = await server.post('/api/teachers/1/subjects').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(Array.isArray(data)).toBeTruthy();
            done();
        });
    });
});
