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

describe('subjects', () => {
    describe('with no auth', () => {
        test('should return 200 and subject by id', async (done) => {
            const response = await server.get('/api/subjects/1');
            const { data } = response.body;
            checkHeader(response);

            expect(response.statusCode).toBe(200);
            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and all seasons of specific subject', async (done) => {
            const response = await server.get('/api/subjects/1/seasons');
            const { data } = response.body;
            checkHeader(response);

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(data)).toBeTruthy();
            done();
        });

        test('should return 200 and season by id', async (done) => {
            const response = await server.get('/api/subjects/1/seasons/2');
            const { data } = response.body;
            checkHeader(response);

            expect(response.statusCode).toBe(200);
            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and all lessons by specific season', async (done) => {
            const response = await server.get('/api/subjects/1/seasons/2/lessons');
            const { data } = response.body;
            checkHeader(response);

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(data)).toBeTruthy();
            done();
        });

        test('should return 200 and lessons by specific season id', async (done) => {
            const response = await server.get('/api/subjects/1/seasons/2/lessons/1');
            const { data } = response.body;
            checkHeader(response);

            expect(response.statusCode).toBe(200);
            expect(data instanceof Object).toBeTruthy();
            done();
        });
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

        test('should return 200 and data from protected subject id post endpoint', async (done) => {
            const response = await server.post('/api/subjects/1').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected subject id put endpoint', async (done) => {
            const response = await server.put('/api/subjects/1').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 204 on subject id delete endpoint', async (done) => {
            const response = await server.delete('/api/subjects/1').send({});
            expect(response.statusCode).toBe(204);
            done();
        });

        test('should return 200 and data from protected seasons post endpoint', async (done) => {
            const response = await server.post('/api/subjects/1/seasons').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(Array.isArray(data)).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected season id post endpoint', async (done) => {
            const response = await server.post('/api/subjects/1/seasons/2').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected season id put endpoint', async (done) => {
            const response = await server.put('/api/subjects/1/seasons/2').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 204 on season id delete endpoint', async (done) => {
            const response = await server.delete('/api/subjects/1/seasons/2').send({});
            expect(response.statusCode).toBe(204);
            done();
        });


        test('should return 200 and data from protected lessons post endpoint', async (done) => {
            const response = await server.post('/api/subjects/1/seasons/2/lessons').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(Array.isArray(data)).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected lessons id post endpoint', async (done) => {
            const response = await server.post('/api/subjects/1/seasons/2/lessons/3').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected lessons id put endpoint', async (done) => {
            const response = await server.put('/api/subjects/1/seasons/2/lessons/3').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 204 on lessons id delete endpoint', async (done) => {
            const response = await server.delete('/api/subjects/1/seasons/2/lessons/3').send({});
            expect(response.statusCode).toBe(204);
            done();
        });
    });
});
