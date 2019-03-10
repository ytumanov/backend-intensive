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

describe('pupils', () => {
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

        test('should return 200 and pupils', async (done) => {
            const response = await server.get('/api/pupils');
            const { data } = response.body;
            checkHeader(response);

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(data)).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected pupils id post endpoint', async (done) => {
            const response = await server.post('/api/pupils').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(Array.isArray(data)).toBeTruthy();
            done();
        });

        test('should return 200 and pupil by id', async (done) => {
            const response = await server.get('/api/pupils/1');
            const { data } = response.body;
            checkHeader(response);

            expect(response.statusCode).toBe(200);
            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected pupil id post endpoint', async (done) => {
            const response = await server.post('/api/pupils/1').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected pupil id put endpoint', async (done) => {
            const response = await server.put('/api/pupils/1').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 204 on pupil id delete endpoint', async (done) => {
            const response = await server.delete('/api/pupils/1').send({});
            expect(response.statusCode).toBe(204);
            done();
        });
    });
});
